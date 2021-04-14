$(function(){
    $.ajax({
        type:"get",
        url:"data/data.json",
        success:function(res){
            console.log(res)
            $.each(res,function(index,item){//获取当前的下标和商品的名字
				console.log(item.pid)
                var el = $(`<a href="vipxq.html?pid=${item.pid}"><li>
                <div class="trademark-T"><img src="${item.imgSrc}" alt=""></div>
                <div class="trademark-X">
                    <h3>${item.title}</h3>
                    <p class="price"><span style="color:#de3d96;">${item.price}</span>折起</p>
                </div>
            </li></a>`)
			$(".section-variety-list").append(el)
            })
        }
    })
})