import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {
  // productsList: { employeename: string; workphone: string; workemail: string; company: string; department: string; jobposition: string; manager: string; }[];
  searchword: FormControl = new FormControl();
  // productsListSearch: { employeename: string; workphone: string; workemail: string; company: string; department: string; jobposition: string; manager: string; }[];
  productsList: any = [];
  productsListSearch: any = [];
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.productsList = [
      {
        employeename: 'Abigali Peterson',
        workphone: '(568)-233-568',
        workemail: "abigali.peterson39gmail.com",
        company: 'Trianabot Technologies'    , 
        department: 'Professional Services',
        jobposition: 'Consultant',
        manager: 'hazelwood'
      },
      {
        employeename: 'Anitha Oliver',
        workphone: '(568)-233-668',
        workemail: "Anitha.Oliver34@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Research & Development',
        jobposition: 'Experienced Developer',
        manager: 'Robin'
      },
      {
        employeename: 'Audrey Peterson',
        workphone: '(568)-233-563',
        workemail: "Audrey.Peterson@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Professional Services',
        jobposition: 'Marketing & Community Manager',
        manager: 'Mitchell Admin'
      },
      {
        employeename: 'Beth Evans',
        workphone: '(568)-233-568',
        workemail: "beth.evans@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Professional Services',
        jobposition: 'Consultant',
        manager: 'Santner'
      },
      {
        employeename: 'Doris Cole',
        workphone: '(588)-233-578',
        workemail: "doris.cole@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Sales',
        jobposition: 'Experienced Developer',
        manager: 'Robin'
      },
      {
        employeename: 'Eli Lambort',
        workphone: '(553)-233-574',
        workemail: "eli.lambort@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Professional Services',
        jobposition: 'Consultant',
        manager: 'Elizebeth'
      },
      {
        employeename: 'Emest Read',
        workphone: '(993)-233-574',
        workemail: "emest.readgmail.com",
        company: 'Trianabot Technologies',
        department: 'Sales',
        jobposition: 'Marketing & Community Manager',
        manager: 'Ronnie Hart'
      },
      {
        employeename: 'Jeffrey Kelly',
        workphone: '(993)-233-554',
        workemail: "Jeffrey.Kelly@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Professional Services',
        jobposition: 'Consultant',
        manager: 'Robin'
      },
      {
        employeename: 'Jennie Fletcher',
        workphone: '(993)-233-574',
        workemail: "Jennie.Fletcher@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Sales',
        jobposition: 'Marketing and Community Manager',
        manager: 'Rohnie'
      },
      {
        employeename: 'Computer Case',
        workphone: '(993)-233-588',
        workemail: "16 No's",
        company: 'Trianabot Technologies',
        department: 'Research and Development',
        jobposition: 'Experienced Developer',
        manager: 'Ronnie Hart'
      },
      {
        employeename: 'Mitchell Admin',
        workphone: '(883)-233-564',
        workemail: "Mitchell.Admin@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Management',
        jobposition: 'Cheif Excecutive Officer',
        manager: ' '
      },
      {
        employeename: 'Paul Williams',
        workphone: '(993)-233-225',
        workemail: "Paul.Williams@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Management',
        jobposition: 'Experienced Developer',
        manager: 'Mitchell'
      },
      {
        employeename: 'Ratchell Perry',
        workphone: '(993)-233-564',
        workemail: "Ratchell.Perry@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Sales',
        jobposition: 'Marketing',
        manager: 'Ronnie'
      },
      {
        employeename: 'Randell Lewis',
        workphone: '(993)-233-555',
        workemail: "Randell.Lewis@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Sales',
        jobposition: 'Marketing',
        manager: 'Mitchell'
      },
      {
        employeename: 'Ronnie Hart',
        workphone: '(943)-233-574',
        workemail: "ronnie.hart48@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Research & Development',
        jobposition: 'Chief Technical Officer',
        manager: ' '
      },
      {
        employeename: 'Sherlane Rhodes',
        workphone: '(983)-253-575',
        workemail: "sherleane.rhodes@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Management',
        jobposition: 'Experienced Developer',
        manager: 'Ronnie Hart'
      },
      {
        employeename: 'Tina Williamson',
        workphone: '(893)-233-874',
        workemail: "tina.williamson@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Administration',
        jobposition: 'Human Resource Management',
        manager: 'Ronnie'
      },
      {
        employeename: 'Toni Jimenez',
        workphone: '(663)-543-574',
        workemail: "toni.jimenez@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Professional Services',
        jobposition: 'Consultant',
        manager: 'Robin'
      },
      {
        employeename: 'Walter Horten',
        workphone: '(593)-233-554',
        workemail: "Walter.Horten@gmail.com",
        company: 'Trianabot Technologies',
        department: 'Research & Development',
        jobposition: 'Experienced Developer',
        manager: 'mitchell'
      }
    ];
    this.productsListSearch = this.productsList;
    this.getusers();
  }

  useredit(item) {
    // console.log(item);
    this.router.navigate(['/user-details'], {queryParams: {item: JSON.stringify(item)}});
  }

  getusers() {
        this.auth.getUsers().subscribe(data => {
            this.productsList = data;
            this.productsListSearch = this.productsList;
        });
  }

}
