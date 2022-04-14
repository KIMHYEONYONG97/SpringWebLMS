let pageNumberCommunity = 0;
let totalPagesCommunity = 0;
let totalElementsCommunity = 0;
let preNumCommunity = 0;
let nexNumCommunity = 0;
let PreviousCommunity = null;
let NextCommunity = null;
let startPageCommunity;
let endPageCommunity;
let searchKeyword;


const table = ' {{#data}}\n' +
    '                                <tr data-id="{{id}}">\n' +
    '                                    <td>\n' +
    '                                        {{id}}\n' +
    '                                    </td>\n' +
    '                                    <td>\n' +
    '                                        {{title}}\n' +
    '                                    </td>\n' +
    '                                    <td>\n' +
    '                                        {{user.nickname}}\n' +
    '                                    </td>\n' +
    '                                    <td>\n' +
    '                                        {{createDate}}\n' +
    '                                    </td>\n' +
    '                                  \n' +
    '                                </tr>\n' +
    '       {{/data}}'


$(document).on('click', '#communityTab', function () {
    $(".nav-link").removeClass("active");
    $(this).addClass('active');
    renderCommunityList(0);
    communityBoxShow();
});
$(document).on('click', '#previousCommunityAtag', function () {

    renderCommunityList(preNumCommunity, searchKeyword);

});
$(document).on('click', '#nextCommunityAtag', function () {

    renderCommunityList(nexNumCommunity, searchKeyword);
});

$(document).on('click', '#myCommunityListTab', function () {
    $(".nav-link").removeClass("active");
    $(this).addClass('active');

});
$(document).on('click', '#communitySearchBtn', function () {
    let search = $('#communitySearchInput').val();
    renderCommunityList(0, search);
});

$(document).on("keyup", '#communitySearchInput', function (key) {
    if (key.keyCode == 13) {
        let search = $('#communitySearchInput').val();
        renderCommunityList(0, search);
    }
});

function renderCommunityList(page, search = "") {
    let courseId = getCourseId();
    searchKeyword = search;
    $.ajax({
        type: "post",
        url: "/community/getCommunityList/" + courseId,
        data: {
            page: page,
            search: search
        },
        success: function (data) {
            if (data != null) {
                $('#tableResult').empty();
                $('.pages').remove();
                let jsonData = {
                    "data": data.content,
                };
                //페이징
                pageNumberCommunity = data.pageable.pageNumber;
                totalPagesCommunity = data.totalPages;
                startPageCommunity = Math.floor(pageNumberCommunity / 10) * 10 + 1;
                endPageCommunity = startPageCommunity + 9 < totalPagesCommunity ? startPageCommunity + 9 : totalPagesCommunity;
                pageNumberCommunity++;
                totalElementsCommunity = data.totalElements;
                preNumCommunity = parseInt(pageNumberCommunity) - 1;
                nexNumCommunity = parseInt(pageNumberCommunity) + 1;
                PreviousCommunity = pageNumberCommunity != 1 ? true : false;
                NextCommunity = totalPagesCommunity > pageNumberCommunity ? true : false;
                var html = "";

                for (var num = startPageCommunity; num <= endPageCommunity; num++) {
                    if (num == pageNumberCommunity) {
                        html += '<li class="page-item active"><a class="page-link pages" onclick="renderCommunityList(' + num + ',' + 'searchKeyword' + ')">' + num + '</a></li>';
                    } else {
                        html += '<li class="page-item"><a class="page-link pages" onclick="renderCommunityList(' + num + ',' + 'searchKeyword' + ')">' + num + '</a></li>';
                    }
                }
                $("#previousCommunity").after(html);
                if (PreviousCommunity) {
                    $("#previousCommunity").removeClass("disabled");
                } else {
                    $("#previousCommunity").addClass("disabled");
                }
                if (NextCommunity) {
                    $("#nextCommunity").removeClass("disabled");
                } else {
                    $("#nextCommunity").addClass("disabled");
                }
                Mustache.parse(table);
                var rendered = Mustache.render(table, jsonData);
                $('#tableResult').html(rendered);
            }
        },
        error: function (request, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            alert("오류");
        }
    });
}



