import { Component } from '@angular/core';
import { CourseListVM } from './common/models/courseListVM.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseList: CourseListVM[] = [
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1178124_76bb_8.jpg',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 14,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1219332_bdd7.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 44,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/461160_8d87_6.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete Node.JS course',
      price: 12,
      oldPrice: 199
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1219332_bdd7.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/647428_be28_6.jpg',
      teacherName: 'Chad Darby',
      courseName: 'Spring & Hibernate for Beginners (includes Spring Boot)',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1219332_bdd7.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1646980_23f7.jpg',
      teacherName: 'Brad Traversy',
      courseName: 'MERN Stack Front To Back: Full Stack React, Redux & Node.js',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1178124_76bb_8.jpg',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 14,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1219332_bdd7.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 44,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/461160_8d87_6.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete Node.JS course',
      price: 12,
      oldPrice: 199
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1219332_bdd7.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/647428_be28_6.jpg',
      teacherName: 'Chad Darby',
      courseName: 'Spring & Hibernate for Beginners (includes Spring Boot)',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1219332_bdd7.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1646980_23f7.jpg',
      teacherName: 'Brad Traversy',
      courseName: 'MERN Stack Front To Back: Full Stack React, Redux & Node.js',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1219332_bdd7.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1646980_23f7.jpg',
      teacherName: 'Brad Traversy',
      courseName: 'MERN Stack Front To Back: Full Stack React, Redux & Node.js',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1178124_76bb_8.jpg',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 14,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1219332_bdd7.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 44,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/461160_8d87_6.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete Node.JS course',
      price: 12,
      oldPrice: 199
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1219332_bdd7.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/647428_be28_6.jpg',
      teacherName: 'Chad Darby',
      courseName: 'Spring & Hibernate for Beginners (includes Spring Boot)',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1219332_bdd7.jpg ',
      teacherName: 'Bonnie Schulkin',
      courseName: 'Complete C# Unity Developer 3D: Learn to Code Making Games',
      price: 10,
      oldPrice: 99
    },
    {
      image: 'https://udemy-images.udemy.com/course/240x135/1646980_23f7.jpg',
      teacherName: 'Brad Traversy',
      courseName: 'MERN Stack Front To Back: Full Stack React, Redux & Node.js',
      price: 10,
      oldPrice: 99
    }

  ]
}
