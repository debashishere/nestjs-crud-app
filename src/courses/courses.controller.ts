import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './course.dto';


// route <method> /courses
@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}
    
    // @desc get all courses
    // route GET /
    @Get()
    async getCourses() {
        const courses = await this.coursesService.getCourses();
        return courses
    }

    // @desc get a course by id
    // route GET /:courseId
    @Get(':courseId')
    async getCourse(@Param('courseId') courseId) {
        const course = await this.coursesService.getCourse(courseId);
        return course;


    }    
    
    // @desc Create a course
    // route POST /
    @Post()
    async addCourse(@Body() createCourseDto: CreateCourseDto) {
        const course = await this.coursesService.addCourse(createCourseDto);
        return course;


    }    
    
    // @desc delete a course by id
    //route DELETE /
    @Delete()
    async deleteCourse(@Query() query) {
        const courses = await this.coursesService.deleteCourse(query.courseId);
        return courses;
    }
}