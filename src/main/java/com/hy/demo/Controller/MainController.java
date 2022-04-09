package com.hy.demo.Controller;

import com.hy.demo.Domain.Course.Dto.CourseDto;
import com.hy.demo.Domain.Course.Service.CourseService;
import com.hy.demo.Domain.User.Dto.UserDto;
import com.hy.demo.Domain.User.Service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller

@RequestMapping("/main/*")
public class MainController {


    @Autowired
    private CourseService courseService;

    @Autowired
    private UserService userService;


    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping({"/index"})
    public String index(Model model) {

        List<UserDto> userList = userService.rankRandomUser(3);
        List<CourseDto> headerView = courseService.randomCourseList(5);
        model.addAttribute("headerView", headerView);
        model.addAttribute("headerViewSize", new ArrayList<>(Arrays.asList(new String[]{"0", "1", "2", "3", "4"})));
        model.addAttribute("userList", userList);

        return "main/index";
    }

}
