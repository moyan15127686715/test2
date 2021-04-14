
$(function(){
	var search = location.search//获取查询字符串
	console.log(search.split("=")[1]);
	var firpid=search.split("=")[1]
	
	$.get("data/data.json",function(e){
		console.log(e)
		$.each(e,function(index,item){
			console.log(item.pid)
			if(item.pid==firpid){
				console.log(item.fir.list)
				$.each(item.fir.list,function(i,t){
					console.log(t)
					$(`<a href="vipgwc.html?pid=${t.obj.pid}"><div class="style-ks1">
							<img src="${t.imgSrc}" alt="">
							<div class="first">
								<p><span>${t.obj.tj}</span></p>
								<p>￥<span>${t.obj.js}</span></p>
								<span style="font-size:8px;text-decoration:line-through;">￥${"t.obj.yj"}</span>
								<span style="font-size:8px;">5.3折${t.obj.zk}</span>
							</div>
							<div class="last">
								<span style="font-size:17.5px;">${t.ks}</span>	
							</div>
						</div>
					</a>`).appendTo($(".style-ks"))
				})
			}
		})
	})
	
	
	
	
	
	
	
	
	var t=$(".bran-list").offset().top
	console.log(t)
	$(window).scroll(function(){
		var st = $("html").scrollTop()-$("body").scrollTop()
		// console.log(st)
		if(st>t){
			$(".filter-bar-list").css({
					width:"100%",
					position:"fixed",
					top:"0"
				})
		}else{
			$(".filter-bar-list").css({
					width:"5.40rem",
					position:"static"
				})
		}
	})
})

 