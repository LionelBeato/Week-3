//provided code

var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

//added codes

console.log(course.name) // Spits out course name
console.log(course.teachers[1]) // Spits out second teacher name
console.log(course.students[0].name) // Spits out first student's name
console.log(course.students[1].computer.type) // Spits out Katy's computer type
console.log(course.preReqs) // Spits out the pre-reqs 
console.log(course.preReqs.equipment.OSOptions[1]) //Spits out second OS option
console.log(course.preReqs.equipment.OSOptions[0]+" or "+course.preReqs.equipment.OSOptions[1]) //Spits out all OS options 

//Array of students

for(var i = 0; i < course.students.length; i++){
var x = course.students[i].computer.OS
if(x === 'OSX'){
console.log(course.students[i].name+" uses a "+x)
}
}
