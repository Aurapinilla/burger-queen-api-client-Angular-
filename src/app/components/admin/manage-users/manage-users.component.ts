import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { usersResponse } from '../../../interfaces/users.interface';
import { UsersService } from '../../../service/users.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  @ViewChildren('menuTrigger') menuTriggers!: QueryList<any>;
  @ViewChild('addUserComponent') addUserComponent!: AddUserComponent;
  @ViewChild('userMenuComponent') userMenuComponent!: UserMenuComponent;

  createNewUser: boolean = false;

  users: usersResponse[] = [];

  displayedColumns: string[] = ['email', 'password', 'role', 'id', 'actions'];

  userActions: string[] = ['Delete', 'Edit'];
  selectedAction: string = '';

  selectedUserId: string | undefined;

  constructor(private usersService: UsersService) { };

  ngOnInit() {
    this.usersList();
  }

  usersList() {
    this.usersService.getUsers()
      .subscribe((data: usersResponse[]) => {
        this.users = data;
        console.log('users:', this.users);
      },
        (error) => {
          console.error('Error getting users:', error);
      });
  }

  newUserForm() {
    this.createNewUser = true;
    this.addUserComponent.hideForm = false;
  }

  handleUserCreated(eventData: boolean) {
    this.usersList();
  }

  setUserId(userId: string) {
    this.selectedUserId = userId;
  }

  handleYesClicked(eventData: boolean) {
    if (eventData === true) {
      console.log('event received');
      
      this.usersList();
    }
  }
}