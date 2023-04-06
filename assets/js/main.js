$(function(){
    

    $('body').mousemove(function(e){
        x=e.clientX;
        y=e.clientY;
        gsap.to('.cursor',{
            x:x,
            y:y
        })

    })

        let lastScroll = 0;

        $(window).scroll(function(){
            curr=$(this).scrollTop();

            lastScroll = curr;
        })



    




	// //마우스를 움직일 때 툴팁을 보여줄 영역
    // var tooltip = document.getElementsByClassName("img")[0];
    // //툴팁 박스 
    // var tooltipTxt = document.getElementsByClassName("tooltiptext")[0];

    

    // //마우스 move 이벤트가 발생하면 
    // tooltip.addEventListener('mousemove', function(e){
    //     // console.log("e.clientX : "+e.clientX);
    //     // console.log("e.clientY : "+e.clientY);

    //     //e.clientX의 값이 현재 위치의 마우스 포인터의 x 좌표 값
    //     //마우스를 움직이면 tooltipTxt(툴팁 박스)의 왼쪽 좌표를 마우스 포인터의 현재 x좌표로 지정
    //     tooltipTxt.style.left = (e.clientX) + 'px';
    //     tooltipTxt.style.top = (e.clientY) + 'px';
    //     //툴팁 박스의 높이를 지정
    //     tooltipTxt.style.height = "35px";
    //     //툴팁 박스 안에 표시될 글자를 마우스의 현재 위치 x 좌표 값
        
    // });

    



    
    function projectList(sortData){
        fetch('./assets/data/project.json')
        .then(res=>res.json())
        .then(json=>{
            allData=json.items;
    
            resultData = allData.filter(function(data){
                return data.sort.indexOf(sortData) >= 0;
            })
            let html='';
            let randNum = 1;

            resultData.forEach(element => {
                html+=`<li class="pj-item">
                            <a href="${element.link}" target="_blank">
                                <div class="img">
                                    <img src="${element.thumb}" alt="${element.title}">
                                </div>
                                <h3 class="title">${element.title}</h3>
                                <p class="sub">${element.sub}</p>
                            </a>
                        </li>`;
                        randNum++;
            });
            $('#projectList').html(html);

         
        })
        
    }
    projectList('all');


    $(document).on('mouseenter','.sc-project .pj-item',function(){
        $(this).addClass('hover');
        $(this).siblings().addClass('no-hover');
    })
    $(document).on('mouseleave','.sc-project .pj-item',function(){
        $(this).removeClass('hover');
        $(this).siblings().removeClass('no-hover');
    })
  



    $('.btn-wrap .btn').click(function(e){
        e.preventDefault();
        target = $(this).find('a').data('target');
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        projectList(target);
    })

    $('.bar-wrap').click(function(){
        $(this).toggleClass('active');
        $('.m-list').toggleClass('active');
    })
    $('.m-item').click(function(){
        $('.bar-wrap').removeClass('active');
        $('.m-list').removeClass('active');
    })
    
    


    var blogSwiper = new Swiper(".blogSwiper", {
        slidesPerView: "auto",
        spaceBetween: 100,
        pagination: {
            el: ".pagination",
            clickable: true,
          },
        breakpoints:{
            1024 : {
                spaceBetween : 40,
            },
            768 : {
                spaceBetween : 40,
            },
            320 : {
                // slidesPerView: 1,
                spaceBetween : 10,
            }
        }
    });
})