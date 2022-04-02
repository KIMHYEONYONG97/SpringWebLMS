/*
const temp =
    '        <div class="row my-1 ">\n' +
    '            <div >\n' +
    '                <div class="text-break">\n' +
    '                    <div >\n' +
    '                        <div class="user-field">\n' +
    '                            <div class="mx-2">\n' +
    '                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"\n' +
    '                                     class="rounded-circle">\n' +
    '                            </div>\n' +
    '                            <div class="user-field-name">\n' +
    '                                <div> <p class=" my-3 ">{{username}}</p></div>\n' +
    '               {{#teachUser}}{{^reply}} ' +
    '                <div class="dropdown dropdown-user text-end" hidden data-user="{{username}}">\n' +
    '                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">\n' +
    '                </a>\n' +
    '                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">\n' +
    '                    <li><a class="dropdown-item createReply" data-bs-toggle="modal" data-id="{{id}}" data-bs-target="#exampleModal3">답글쓰기</a></li>\n' +
    '                </ul>{{/reply}}{{/teachUser}}\n' +

    '               {{^teachUser}}' +
    '                <div class="dropdown dropdown-user text-end" hidden data-user="{{username}}">\n' +
    '                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">\n' +
    '                </a>\n' +
    '                      <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">\n' +
    '                    <li><a class="dropdown-item update" data-bs-toggle="modal" data-scope="{{scope}}" data-comments="{{comments}}" data-id="{{id}}"data-bs-target="#exampleModal" >수정</a></li>\n' +
    '                    <li><a class="dropdown-item delete" data-id="{{id}}">삭제</a></li>\n' +
    '                </ul>{{/teachUser}}\n' +
    '            </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <p class="text-muted my-2 comments">\n' +
    '                            {{comments}}\n' +
    '                        </p>\n' +
    '\n' +
    '                        <small class=" my-3 create-date">\n' +
    '                            {{createDate}}\n' +
    '                        </small>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            {{#reply}}\n' +
    '                <div class="reply-box  text-break">\n' +
    '                            <div class="user-field-name">\n' +
    '                                <div> <p class=" my-3"> 강사 ' + getId().teachName + '님의 답글</p></div>\n' +
    '                   {{#teachUser}}\n' +
    '                                <div class="dropdown text-end">\n' +
    '                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">\n' +
    '                </a>\n' +
    '                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">\n' +
    '                    <li><a class="dropdown-item update" data-id="{{replyId}}" data-comments="{{reply}}" data-bs-toggle="modal" data-bs-target="#exampleModal2">수정</a></li>\n' +
    '                    <li><a class="dropdown-item delete" data-id="{{replyId}}" >삭제</a></li>\n' +
    '                </ul>\n' +
    '                            </div>\n' +
    '                        {{/teachUser}}\n' +
    '                        </div>\n' +
    '                    <p class="text-muted my-2 ">\n' +
    '                        {{reply}}\n' +
    '                    </p>\n' +
    '                     <div>  \n' +
    '                    <small class=" my-3 create-date">\n' +
    '                        {{createDate}}\n' +
    '                    </small>\n' +
    '                    </div> \n' +
    '                </div>\n' +
    '            {{/reply}}\n' +
    '            <hr class=" mt-3 mb-2">\n' +
    '        </div>\n'
*/


const template = ' ' +
    ' {{#data}}' +
    '<main class="col-md-12 ms-sm-auto col-lg-12  px-md-4">\n' +
    '\n' +
    '\n' +
    '                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">\n' +
    '                    <h1 class="h2">{{title}}</h1>\n' +
    '                    <div class="btn-toolbar mb-2 mb-md-0">\n' +
    '\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '              <div class="d-flex justify-content-between">' +
    '                 <div class="my-4 w-100" id="content" width="900" height="380">' +
    '                   {{{contents}}}                                                            ' +
    '                </div>\n' +
    ' {{/data}}' +
    ' {{#fileCheck}}' +
    '                 <div class="dropdown">\n' +
    '                           <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">\n' +
    '    첨부파일\n' +
    '  </button>\n' +
    '  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n' +
    '                               {{#data.files}}   ' +
    '    <li><a class="dropdown-item" href="/file/download/{{courseId}}/{{data.id}}/{{id}}">{{origFileName}} size:{{fileSize}}kb</a><li>\n' +
    '                               {{/data.files}}   ' +

    '  </ul>\n' +
    '</div>' +
    ' {{/fileCheck}}' +
    '              </div>  ' +
    '\n' +
    '                <div class="my-5 col-12">\n' +
    '                <h5>댓글</h5>\n' +
    '\n' +
    '                <div class="my-3 col-12 border p-3 border-1">\n' +
    '                <form id="commentsForm" onsubmit="return false">\n' +
    '                <input type="text" class="form-control comments" placeholder="댓글을 입력하세요" name="comments">\n' +
    '                </form>\n' +
    '                           <button class="btn btn-secondary mt-3" type="button" id ="commentsCreateBtn">\n' +
    '                                     댓글쓰기\n' +
    '                            </button>\n' +
    '                </div>\n' +
    '                </div>\n' +
    '                <div class="my-5 col-12 ">\n' +
    '                <div class="my-3 col-12" id="commentsList">\n' +
    '                </div>\n' +
    '                </div>\n' +
    '            </main>'


const comments = '' +
    '            <hr class=" mt-3 mb-2">\n' +
    ' {{#data}}' +
    '        <div class="row my-1 mainComments">\n' +
    '            <div >\n' +
    '                <div class="text-break">\n' +
    '                    <div >\n' +
    '                        <div class="user-field">\n' +
    '                            <div class="mx-2">\n' +
    '                            {{#profileImage}}\n' +
    '                                <img src="{{profileImage}}" alt="mdo" width="32" height="32"\n' +
    '                                     class="rounded-circle">\n' +
    '                            {{/profileImage}}\n' +
    '                            {{^profileImage}}\n' +
    '                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"\n' +
    '                                     class="rounded-circle">\n' +
    '                            {{/profileImage}}\n' +
    '                            </div>\n' +
    '                            <div class="user-field-name">\n' +
    '                                <div> <p class=" my-3 username">{{username}}</p></div>\n' +
    '               {{^myCommentsFlag}} ' +
    '                <div class="dropdown dropdown-user text-end" data-user="{{username}}">\n' +
    '                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">\n' +
    '                </a>\n' +
    '                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">\n' +
    '                    <li><a class="dropdown-item createReply" data-use="disabled" data-id="{{id}}">답글쓰기</a></li>\n' +
    '                </ul>{{/myCommentsFlag}}\n' +

    '               {{#myCommentsFlag}}' +
    '                <div class="dropdown dropdown-user text-end"  data-user="{{username}}">\n' +
    '                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">\n' +
    '                </a>\n' +
    '                      <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">\n' +
    '                    <li><a class="dropdown-item createReply" data-use="disabled" data-id="{{id}}">답글쓰기</a></li>\n' +
    '                    <li><a class="dropdown-item update" data-use="disabled"  data-id="{{id}}">수정</a></li>\n' +
    '                    <li><a class="dropdown-item delete" data-id="{{id}}">삭제</a></li>\n' +
    '                </ul>{{/myCommentsFlag}}\n' +
    '            </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <p class="text-muted my-2 comments">\n' +
    '                            {{{comments}}}\n' +
    '                        </p>\n' +
    '\n' +
    '                        <small class=" my-3 create-date">\n' +
    '                            {{createDate}}\n' +
    '                        </small>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                        {{#replyCounts}}\n' +
    '                        <a class="link-primary" data-page="1" role="button" onclick="getReplyData({{id}},this)" data-bs-toggle="collapse" data-bs-target="#collapse{{id}}" aria-expanded="false" aria-controls="collapseExample">\n' +
    '                            ▼ {{replyCounts}}\n 개의 댓글 더보기' +
    '                        </a>\n' +
    '                        {{/replyCounts}}\n' +
    '            <hr class=" mt-3 mb-2 end">\n' +
    '                        {{#replyCounts}}\n' +
    '            <div class="collapse" id="collapse{{id}}">\n' +
    '            </div>\n' +
    '                        {{/replyCounts}}\n' +
    '            </div>\n' +
    '            </div>\n' +
    ' {{/data}}'


const templateNav = '' +
    '{{#data}}' +
    ' <li class="nav-item" s>\n' +
    '                            <a role="button" class="courseboard-href nav-link" aria-current="page" data-id="{{id}}">\n' +
    '                                {{title}}\n' +
    '                            </a>\n' +
    '                        </li>' +
    ' {{/data}}'


var courseBoard = getData();
var courseBoardId;
$(document).ready(function () {


    if (courseBoard.length > 0) {
        $('#viewBox').removeAttr("hidden");
        let index = courseBoard[0].id;
        navRender(courseBoard);
        mainRender(index, courseBoard);
        $(".courseboard-href").first().addClass('active');
    } else {
        alert("아직 생성된 목차가 없습니다.");
    }


    $(document).on("click", ".courseboard-href", function () {
        viewBoxShow();
        let id = $(this).data('id');
        $(".nav-link").removeClass("active");
        $(this).addClass('active');
        mainRender(id, courseBoard);
        $.ajax({
            type: "post",
            url: "/courseboard/viewPlus/" + courseBoardId
        });
    });


})

function viewBoxShow() {
    $('#viewBox').removeAttr("hidden");
    $('#updateBox').attr("hidden", "hidden");
    $('#createBox').attr("hidden", "hidden");
    $('#statisticsBox').attr("hidden", "hidden");

}

function createBoxShow() {
    $('#createBox').removeAttr("hidden");
    $('#updateBox').attr("hidden", "hidden");
    $('#viewBox').attr("hidden", "hidden");
    $('#statisticsBox').attr("hidden", "hidden");
}

function updateBoxShow() {
    $('#updateBox').removeAttr("hidden");
    $('#viewBox').attr("hidden", "hidden");
    $('#createBox').attr("hidden", "hidden");
    $('#statisticsBox').attr("hidden", "hidden");
}

function statisticsBoxShow() {
    $('#statisticsBox').removeAttr("hidden");
    $('#viewBox').attr("hidden", "hidden");
    $('#updateBox').attr("hidden", "hidden");
    $('#createBox').attr("hidden", "hidden");
}


function getData() {
    var value;
    var courseId = getCourseId();
    $.ajax({
        type: "get",
        url: "/courseboard/data/" + courseId,
        async: false,
        success: function (data) {
            value = data;
        },
        error: function (request, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            alert("오류");
        }
    });
    return value;
}

function navRender(data) {
    let courseBoard = data;
    $('.navResult').empty();
    let jsonData = {
        "data": courseBoard
    };
    Mustache.parse(templateNav);
    var randeredNav = Mustache.render(templateNav, jsonData);
    $('#navResult').html(randeredNav);
}

function mainRender(id, data) {
    let courseBoard = data;
    if (document.querySelector('#main-tab') != null) {
        var someTabTriggerEl = document.querySelector('#main-tab');
        var tab = new bootstrap.Tab(someTabTriggerEl);
        tab.show();
    }
    $('#content').empty();
    let content = courseBoard.filter(x => x.id === id);
    let fileCheck = content[0].files.length == 0 ? null : true;

    let jsonData = {
        "data": content[0],
        "fileCheck": fileCheck,
        "courseId": getCourseId(),
    };
    Mustache.parse(template);
    var rendered = Mustache.render(template, jsonData);
    $('#result').html(rendered);
    courseBoardId = content[0].id;
    commentsRender(1);
}


$(document).on('click', '#commentsCreateBtn', function () {
    let comments = $("input[name=comments]").val();
    if (comments.length == 0) {
        alert("댓글을 작성후 눌러주세요");
        return;
    }
    $.ajax({
        type: "post",
        url: "/comments/create/" + courseBoardId,
        data: {
            comments: comments
        },
        success: function (data) {
            if (data == "1") {
                alert("댓글 작성 성공");
                $("input[name=comments]").val("");
                commentsRender(1);
            } else {
                alert("실패");
            }
        },
        error: function (request, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            alert("오류");
        }
    });

});


$(document).on('click', '.update', function () {
    let textBreak = $(this).closest('.text-break');
    if ($(this).data('use') == 'disabled') {
        let id = $(this).data('id');
        let textBox = textBreak.find('.comments');
        let contents = textBox.text().trim();
        $(this).data('use', 'able');
        const form = '<div class="updateReplyBox">\n' +
            '                <form class="updateReplyForm" onsubmit="return false">\n' +
            '                <input type="text" class="form-control updateComments" placeholder="댓글을 입력하세요" name="comments" value="' + contents + '">\n' +
            '                </form>\n' +
            '                           <button class="btn btn-secondary mt-3 replyUpdate" type="button"  data-id="' + id + '">\n' +
            '                                     댓글수정\n' +
            '                            </button>\n' +
            '                           <button class="btn btn-secondary mt-3 replyUpdateCancel" data-comments="' + contents + '"  type="button" >\n' +
            '                                     취소\n' +
            '                            </button>\n' +
            '                </div>';

        textBox.after(form);
        textBox.remove();
    } else {
        let updateComments = textBreak.find('.updateComments');
        updateComments.focus();

    }
});

$(document).on('click', '.replyUpdateCancel', function () {
    let update = $(this).closest('.text-break').find('.update');
    let updateReplyBox = $(this).closest('.updateReplyBox');
    let comments = $(this).data('comments');
    update.data('use', 'disabled');
    const html = '<p class="text-muted my-2 comments">' + comments + ' </p>';
    updateReplyBox.after(html);
    updateReplyBox.remove();
});


$(document).on('click', '.replyUpdate', function () {
    let form=$(this).siblings('.updateReplyForm');
    let update = $(this).closest('.text-break').find('.update');
    let updateReplyBox = $(this).closest('.updateReplyBox');
    let user = $(this).closest('.text-break').find('.userTag');
    let comments
    if (user.length == 0) {
        comments = form.find('.updateComments').val();
    } else {
        comments ='<p class="userTag" style="font-weight: 900;">' + user.text() + '</p> ' +'<p class="text-muted my-2 comments">'+ form.find('.updateComments').val()+'</p>'
    }
    let id =$(this).data('id');
    $.ajax({
        url: '/comments/updateReply/'+id,
        method: 'POST',
        data: {'comments': comments},
        success: function (data) {
            if (data != null) {
                const html = '<p class="text-muted my-2 comments">' + data.comments + ' </p>';
                updateReplyBox.after(html);
                updateReplyBox.remove();
                user.remove();
                update.data('use', 'disabled');
            } else {
                alert("실패");
                history.go(0);
            }
        },
        error: function (request, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            alert("오류");
        }

    })



});

$(document).on('click', '.delete', function () {
    let content = $(this).closest('div.row.my-1');
    let id =$(this).data('id');
    $.ajax({
        url: '/comments/deleteReply/'+id,
        method: 'POST',
        success: function (data) {
            if (data == "1") {
                alert("삭제성공");
                content.remove();
            } else {
                alert("실패");
                history.go(0);
            }
        },
        error: function (request, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            alert("오류");
        }
    })
});