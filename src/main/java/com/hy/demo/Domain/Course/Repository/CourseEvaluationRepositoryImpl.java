package com.hy.demo.Domain.Course.Repository;

import com.hy.demo.Domain.Course.Dto.CourseEvaluationDto;
import com.hy.demo.Domain.Course.Entity.CourseEvaluation;
import com.hy.demo.Domain.Course.Entity.QCourseEvaluation;
import com.hy.demo.Utils.QueryDsl4RepositorySupport;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.hy.demo.Domain.Course.Entity.QCourse.course;
import static com.hy.demo.Domain.Course.Entity.QCourseEvaluation.courseEvaluation;
import static com.hy.demo.Domain.User.Entity.QUser.*;


public class CourseEvaluationRepositoryImpl extends QueryDsl4RepositorySupport implements CourseEvaluationRepositoryCustom  {



    public CourseEvaluationRepositoryImpl() {
        super(CourseEvaluation.class);
    }


    @Autowired
    Logger logger;


    public Map<String, Double> countScope(Long id){
        JPAQueryFactory queryFactory=getQueryFactory();
         List<Tuple> fetch = queryFactory.select(courseEvaluation.scope, courseEvaluation.scope.count())
                .from(courseEvaluation)
                .where(course.id.eq(id).and(courseEvaluation.scope.isNotNull()))
                .groupBy(courseEvaluation.scope)
                .fetch();
        Map<Double,Long> map = new HashMap();
        for (Tuple tuple : fetch) {
            System.out.println("tuple.get(courseEvaluation.course),tuple.get(courseEvaluation.scope.count() = " + tuple.get(courseEvaluation.scope)+ tuple.get(courseEvaluation.scope.count()));
            map.put(tuple.get(courseEvaluation.scope),tuple.get(courseEvaluation.scope.count()));
        }
        Double one = 0.0;
        Double two = 0.0;
        Double three= 0.0;
        Double four= 0.0;
        Double five= 0.0;

        for( Double key : map.keySet() ){
            for (int i = 0; i < map.get(key); i++) {
                if (String.format("%.1f", key).charAt(2)=='5') {//x.5 일때
                    int scope=(int)(key  % 10);
                    switch (scope){
                        case 0:
                            one+=1.0;
                            break;
                        case 1:
                            one+=0.5;
                            two+=0.5;
                            break;
                        case 2:
                            two+=0.5;
                            three+=0.5;
                            break;
                        case 3:
                            three+=0.5;
                            four+=0.5;
                            break;
                        case 4:
                            four+=0.5;
                            five+=0.5;
                            break;
                        case 5:
                            five+=0.5f;
                            break;
                    }
                } else {

                    if (key == 1.0) {
                        one += 1.0;
                    } else if (key == 2.0) {
                        two += 1.0;
                    } else if (key == 3.0) {
                        three += 1.0;
                    } else if (key == 4.0) {
                        four += 1.0;
                    } else if (key == 5.0) {
                        five += 1.0;
                    }
                }
            }


        }
        Map<String, Double> list =new HashMap<>();
        list.put("5",five);
        list.put("4",four);
        list.put("3",three);
        list.put("2",two);
        list.put("1",one);
        return list;
    }

    public Page<CourseEvaluationDto> findByIDCourseEvaluationDTO(Long courseId, Pageable pageable) { //강의평가
        QCourseEvaluation reply = new QCourseEvaluation("reply");
        return applyPagination(pageable, query ->
                query.select(Projections.constructor(CourseEvaluationDto.class
                        , courseEvaluation.id
                        , courseEvaluation.course.courseName
                        , courseEvaluation.user.username
                        , courseEvaluation.course.id
                        , courseEvaluation.user.id
                        , courseEvaluation.scope
                        , courseEvaluation.comments
                        , courseEvaluation.createDate
                        , reply.comments
                        , reply.createDate
                        , reply.id
                ))
                        .from(courseEvaluation)
                        .leftJoin(courseEvaluation.course, course)
                        .leftJoin(reply)
                        .on(courseEvaluation.id.eq(reply.replyId))
                            .where(courseEvaluation.course.id.eq(courseId).and(courseEvaluation.scope.isNotNull()))
        );

    }


    public CourseEvaluation findByReply(Long id) {
        return select(courseEvaluation)
                        .from(courseEvaluation)
                        .where(courseEvaluation.replyId.eq(id)).fetchOne();
    }

    public CourseEvaluation findByUsernameAndId(String username,Long courseId,Long id) {
        return select(courseEvaluation)
                .from(courseEvaluation)
                .leftJoin(courseEvaluation.user, user)
                .where(usernameEq(username),
                        courseIdEq(courseId),
                        idEq(id))
                .fetchJoin().fetchOne();
    }

    private BooleanExpression usernameEq(String username) {
        return username != null ? courseEvaluation.user.username.eq(username) : null;
    }
    private BooleanExpression courseIdEq(Long courseId) {
        return courseId != null ? courseEvaluation.course.id.eq(courseId) : null;
    }
    private BooleanExpression idEq(Long id) {
        return id != null ? courseEvaluation.id.eq(id) : null;
    }




}
