import { group } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-insurance',
  templateUrl: './parent-insurance.component.html',
  styleUrls: ['./parent-insurance.component.css']
})
export class ParentInsuranceComponent {
  totalCount!: number;
  count!: number;
  insuranceData: Insurance[] = [];
  insuranceList: Insurance[] = [
    { InsName: "manisha", package: "group", premium: 22222 },
    { InsName: "ashish", package: "group", premium: 33333 },
    { InsName: "kajal", package: "group", premium: 44444 },
    { InsName: "sai", package: "third-party", premium: 11111 },
    { InsName: "dhanu", package: "fam", premium: 33333 },
    { InsName: "rahul", package: "fam", premium: 44444 },
    { InsName: "jyoti kd", package: "third-party", premium: 44444 },
  ]
  constructor() {
this.insuranceData = this.insuranceList
  }
  getInsuranceType(data: any) {
    console.log("data recieved in parent", data)
    if (data === group) {
      this.insuranceData = this.insuranceList
      console.log(this.insuranceData)
      this.count = this.insuranceData.length;
      this.totalCount = this.insuranceData.reduce((acc: any, el: any) => { return acc + el.premium }, 0)
      console.log(this.totalCount)
    } else {
      this.count = this.insuranceData.length
      this.insuranceData = this.insuranceList.filter(el => el.package === data)
      this.count = this.insuranceData.length
      this.totalCount = this.insuranceData.reduce((acc: any, el: any) => { return acc + el.premium }, 0)
      console.log(this.totalCount)

    }
  }


}
export class Insurance {

  InsName!: string;
  package!: string;
  premium!: number;
}