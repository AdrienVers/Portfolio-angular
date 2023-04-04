export class Tag {
	name: string;
	image: string;
  }
  
  export class Skill {
	id: number;
	name: string;
	tags: Array<Tag>;
	created: Date;
  }

  export class Formation {
	id : number;
	name : string;
	image : string;
	tags : Array<String>;
	link : string;
	owner : string;
  }