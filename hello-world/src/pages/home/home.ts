import { NavController } from 'ionic-angular';
import { GithubService } from './../../providers/github';
import { Component } from '@angular/core';
import { DetailsPage } from '../details/details'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GithubService]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(private github: GithubService,
              private navCtrl: NavController) {
    
  }

  getRepos() {
    this.github.getRepositories(this.username)
      .subscribe(
        data => {
          this.foundRepos = data.json();
        },
        err => {
          console.log(err);
        },
        () => {
          console.log("getRepos completed");
        }
      );
  }

  goToDetails(repo) {  
      this.navCtrl.push(DetailsPage, { repo: repo });
  }
}
