
$.ajax({
	url:"data/data.json",
	type:"get",
	success:function(res){
		// console.log(res)
		$.each(res,function(index,item){
			// console.log(item)
			$.each(item.fir.list,function(index1,item1){
				if(localStorage["id"+item1.obj.pid]){
					console.log(item1);
					var num = localStorage.getItem("id"+item1.obj.pid+"num")
					// console.log(num)
					//获取对应的商品数量
					var el = $(`<div class="product-item" data-pid=${item1.obj.pid}>
						<div class="check">
							<label>
								<input type="checkbox" checked class="cc">
								<p></p>
							</label>
						</div>
						<div class="product">
								<img src="${item1.imgSrc}" >
							<div class="detail">
								<h3>${item1.ks}</h3>
							<div>
								<p class="price"><span>￥</span>${item1.obj.js}</p>
									<div class="control">
										<button class="minus">-</button>
										<input type="text" value="${num}">
										<button class="add">+</button>
									</div>
								</div>
							</div>
							<button class="del">删除</button>
						</div>
					</div>`)
					$("main").append(el)
				}
			})
		})
	}
})

$("main").on("touchstart",".add",function(e){
	console.log(1)
	var val = $(this).prev().val()
	console.log($(this))
	val++
	$(this).prev().val(val)
	
	$(this).siblings(".minus")
})	

$("main").on("touchstart",".minus",function(e){
	console.log(1)
	var val = $(this).next().val()
	val--
	if(val<1){
		val=1
	}
	$(this).next().val(val)
	
})










// $("main").on("touchstart",".add",function(e){
// 	//获取点击的按钮的前一个兄弟节点 也就是input输入框 的value值 自增后再重新赋值给这个input
// 	var val = $(this).prev().val()//当点击加号的设置input里面的值
// 	val++//input里面的数量增加
// 	 $(this).prev().val(val)//点击当前加号时把获取到input数量增加的值复制给当前的input
// 	 $(this).siblings(".minus").prop("disabled",false)
	
// 	 var pid = $(this).parents(".product-item").data("pid")
// 	 console.log(pid)
// 	 localStorage.setItem("id"+pid+"num",val) 
// 	 cal()
// })

// $("main").on("touchstart",".minus",function(e){
// 	//获取点击的按钮的前一个兄弟节点 也就是input输入框 的value值 自增后再重新赋值给这个input
// 	var val = $(this).next().val()
// 	val--
// 	if(val<=1){
// 		val=1
// 		$(this).prop("disabled",true)
// 	}else {
// 		$(this).prop("disabled",false)
// 	}
// 	 $(this).next().val(val)
// 	 cal()
// })

// $("footer .checkall input").on("change",function(){
// 	var checked = $(this).prop("checked")
// 	console.log(1)
// 	$("main").find("input[type=checkbox]").prop("checked",checked)
// 	cal()
// })

// $("main").on("change",".check input",function(e){
// 	var len = $("main").find(".check input").length
// 	var checkendLen = $("main").find(".check input:checked").length
// 		//被选中的商品的长度
// 		if(len===checkendLen){//判断商品的总长度和被选中的商品的长度是否一致
// 			$(".checkall input").prop("checked",true)
// 		}else {
// 			$(".checkall input").prop("checked",false)
// 		}
	
// 	cal()
// })

// $("main").on("touchstart",".del",function(){
// 	var pid = $(this).parents(".product-item").data("pid")
// 	localStorage.removeItem("id"+pid)
// 	localStorage.removeItem("id"+pid+"num")
// 	$(this).parents(".product-item").remove()
	
// 	cal()
// })


// $(window).on("load",function(){
// 	cal()
// })

// function cal(){
// 		var zj = 0
// 		//机选总价
// 			$(".check input:checked").each(function(index1,item1){
// 					//$(".check input:checked").eq(index1)
				
// 					var checkbox = $(".check input:checked").eq(index1)
					
// 					var num = checkbox.parents(".product-item").find(".control input").val()
// 					var price = checkbox.parents(".product-item").find(".price").text().substr(1)
// 					console.log(price)
// 					zj+=num*price
// 			})
// 			$(".total-price").text("￥"+zj)
		
// 	}