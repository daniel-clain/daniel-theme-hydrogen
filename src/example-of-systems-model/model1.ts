
import {autorun, makeObservable, observable, action} from 'mobx';

type Skill = 'ideas' | 'grunt work' 
type SkillMagnitude = {
  name: Skill
  magnitude: 1 | 2 | 3 | 4 | 5
}

type Strength = SkillMagnitude
type Weakness = SkillMagnitude

interface _hasStrenghtsAndWeakneses{
  strengths: Strength[]
  weaknesses: Weakness[]
}

type Job = {
  name: string
  work: number
  payment: number
}
type DoneJob = Job & {cost: number}

class Employee implements _hasStrenghtsAndWeakneses{
  name: string
  strengths: Strength[] = [
    {name: 'ideas', magnitude:2}, {name: 'grunt work', magnitude: 2}
  ]
  weaknesses: Weakness[] = []
  constructor(name: string){
    this.name = name
  }
}

class Me extends Employee{ 
  strengths: Strength[] = [
    {name: 'ideas', magnitude: 5}
  ]
  weaknesses: Weakness[] = [{name: 'grunt work', magnitude: 5}]
  constructor(){
    super('Daniel')
  }
  
  getTwinkProstitutes(money){
    return money && ['twink prostitute', 'twink prostitute']
  }
}

class Worker extends Employee{
  workRate: number
}

class Company{
  output$: DoneJob = null
  outputArray: DoneJob[] = []
  money: number = 0
  me = new Me()
  employees =<Employee[]>[new Employee('Joe'), new Employee('Fred'), new Employee('Frank'), this.me]
  constructor(){
    makeObservable(this, {
      output$: observable,
      outputArray: observable,
      giveInput: action
    })
  }
  private setOutput(output: DoneJob){
    this.output$ = output
    this.outputArray.push(output)
  }
  giveInput = (input: Job) => {
    const output: DoneJob = this.makeAThing(input)
    this.money -= output.cost
    this.money += output.payment
    this.setOutput(output)
  }
  private makeAThing(job: Job): DoneJob{
    const skillType: Skill = job.name == 'make chicken' ? 'grunt work' : 'ideas'
    const worker = this.employees.map((e: Employee): Worker => {
      return {...e, workRate: getWorkRate(e)}
    })
    .sort((a, b) => b.workRate - a.workRate)[0]
    

    console.log(`${worker.name} is working on ${job.name} at a rate of ${worker.workRate}`);

    return {...job, cost: job.work / worker.workRate}



    function getWorkRate(employee: Employee){

      let magnitude: number = employee.strengths.find(s => s.name == skillType)?.magnitude
      if(!magnitude){
        magnitude = -(employee.weaknesses.find(s => s.name == skillType)?.magnitude) || 0
      }
      return magnitude
      

    }


  }
}

const company = new Company()

autorun(() => {
  if(company.output$){
    console.log(`${company.output$.name} was completed at a cost of ${company.output$.cost}`);
  }
})

company.giveInput({name: 'make chicken', work: 20, payment: 10})
company.giveInput({name: 'solve global suffering', work: 50, payment: 100})
console.log(`company.money, ${company.money} `)

company.me.getTwinkProstitutes(company.money)
console.log('you enjoy twink prostitutes');
