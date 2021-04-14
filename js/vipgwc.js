
	var search = location.search
	console.log(search.split("=")[1])
	var pid = search.split("=")[1]
	console.log(pid)
	$.ajax({
		url:"data/data.json",
		type:"get",
		success:function(res){
			console.log(res)
			$.each(res,function(index,item){
				console.log(item)
				if(item.pid==pid.split("-")[0]){
					var li =""
					$.each(item.fir.list,function(index1,item1){
						// console.log(item.fir.list.obj.album)
						if(pid===item1.obj.pid){
							console.log(item1);
							$.each(item1.obj.album,function(index2,item2){
								console.log(item2);
								li+=`<li><img src="${item2}"></li>`
							})
							
						}
					})
					console.log(li);
					var el = $(`
						<ul class="list">
							${li}
						</ul>
					`)
					$(".box").append(el)
					console.log(el)
				}
			})
			
			
			$(".shopping .btn").on("touchstart",function(){
				var l = localStorage
				//存商品id
				l.setItem("id"+pid,pid)
				//存储数量	l.setItem("")
			
				if(l.getItem("id"+pid+"num")){//判断本地存储里是否有对应这条商品的数量，如果有，就用原来的值自增
				//。如果没有就设置这个值为1
				var num = l.getItem("id"+pid+"num")
					l.setItem("id"+pid+"num",++num)
				}else {
					l.setItem("id"+pid+"num",1)
				}
			})
			
			
			
			var first = $(".list li").first().clone()
			console.log(first)
			
			var last = $(".list li").last().clone()
			console.log(last)
			
			$(".list").append(first).prepend(last)
			var start
			var index = 0
			var w
			var len = $(".list li").length
			$(".list li").on("touchstart",function(e){
				start = e.touches[0].pageX
				w = parseFloat($(".list li").css("width"))
			})
			
			$(".list li").on("touchend",function(e){
				var end = e.changedTouches[0].pageX
				
				if(start-end>w/3){
					index++
					if(index>len-2){
						index = 1
						$(".list").css({transform:"translateX(0)"})
					}
				}else if(start-end<-w/3){
					index--
					if(index<1){
						index=len-2
						$(".list").css({transform:"translateX("+(-6.4*(len-1))+"rem)"})
					}
				}
				console.log(index);
				$(".list").animate({
					transform:"translateX("+(-6.4*index)+"rem)"
				},500)
				$(".box p span").eq(index-1).addClass("active").siblings().removeClass("active")
			})
			
		}
		
	})


	

	


	
	