//
//    Внешний JavaScript код, для онлайн командной строки
//
//    Начало разработки : 5.08.2019  Время: 21.48
//
//	  Везде вместо вывода alert значения должны выводиться в созданную консоль!

    			function Information(){ // Объявление функции "Информация"
 		 			document.getElementById("String1").innerHTML = "Командная строка онлайн!";// Вывод текста в строку
 		 				var style_string = document.getElementById("String1"); // Получение елемента по ID 
  						style_string.style.color = "#ebe0df";// Установка цвета для команд на белый
  						style_string.style.fontSize = "15px";// Размер шрифта
  						style_string.style.fontWeight = "bolder";// Жирный шрифт
  						style_string.style.float = "left";// Позиционирование слева от страницы

  					document.getElementById("String2").innerHTML = "Для продолжения вводите команды в строку ниже";// Вывод текста в строку
 		 				var style_string = document.getElementById("String2"); // Получение елемента по ID 
  						style_string.style.color = "#ebe0df";// Установка цвета для команд на белый
  						style_string.style.fontSize = "15px";// Размер шрифта
  						style_string.style.fontWeight = "bolder";// Жирный шрифт
  						style_string.style.float = "left";// Позиционирование слева от страницы	

  					document.getElementById("String3").innerHTML = "Узнать список команд можно ниже"; // Вывод текста в строку
 		 				var style_string = document.getElementById("String3"); // Получение елемента по ID 
  						style_string.style.color = "#ebe0df";// Установка цвета для команд на белый
  						style_string.style.fontSize = "15px";// Размер шрифта
  						style_string.style.fontWeight = "bolder";// Жирный шрифт
  						style_string.style.float = "left";// Позиционирование слева от страницы	 

  					document.getElementById("String4").innerHTML = "Дата создания : Август 2019";// Вывод текста в строку
 		 				var style_string = document.getElementById("String4"); // Получение елемента по ID 
  						style_string.style.color = "#ebe0df";// Установка цвета для команд на белый
  						style_string.style.fontSize = "15px";// Размер шрифта
  						style_string.style.fontWeight = "bolder";// Жирный шрифт
  						style_string.style.float = "left";// Позиционирование слева от страницы
  				}		


			function Clear(){// Функция очищения страницы
          		document.getElementById("String1").innerHTML = ""; // Пустая строка 1
          		document.getElementById("String2").innerHTML = ""; // Пустая строка 2
          		document.getElementById("String3").innerHTML = ""; // Пустая строка 3
          		document.getElementById("String4").innerHTML = ""; // Пустая строка 4
          		document.getElementById("String5").innerHTML = ""; // Пустая строка 5
          		document.getElementById("String6").innerHTML = ""; // Пустая строка 6
          		document.getElementById("String7").innerHTML = ""; // Пустая строка 7
          		document.getElementById("String8").innerHTML = ""; // Пустая строка 8
          		document.getElementById("String9").innerHTML = ""; // Пустая строка 9
          		document.getElementById("String10").innerHTML = "";// Пустая строка 10
			}
			
            Information();// Вызов функции "Информация"
       			var value_entered; // Объявление переменной value_entered       			
				function func(event){ //Функция ввода команд и принятие значения с помощью клавиши Enter
					if (event.keyCode == 13){ // Если клавиша это Enter
		    			var value_entered = (document.getElementById("String_cmd").value);//Ввести значение из строки в переменную
		    			}	
		    			document.getElementById("Clear_cmd").onclick = function(e){
		    				document.getElementById("String_cmd").value = "";
		    			}

							if(value_entered.length < 1){ // Проверка на пустую строку
								Clear(); // Вызов функции "Clear" для очищения рабочей области 
								document.getElementById("String1").innerHTML = "Введите хоть что-то...";// Предупреждение пользователя, что он ввел пустую строку
							}
								else{ // Если введенное слово подходит под список команд
											
									if(value_entered.includes("!")){ //Проверка на принадлежность к списку команд
                            				if(value_entered == '!getDate'){//Получение даты и вывод пользователю
               									var now = new Date();// Переменная now хранит текущую дату
               											Clear(); // Очищение рабочей области
                  									document.getElementById("String1").innerHTML = now; // Вывод даты в рабочую строку 
                  										var style_string = document.getElementById("String1"); // Получение елемента по ID 
  															style_string.style.color = "#ebe0df";// Установка цвета для команд на белый
  															style_string.style.fontSize = "15px";// Размер шрифта
  															style_string.style.fontWeight = "bolder";// Жирный шрифт
  															style_string.style.float = "left";// Позиционирование слева от страницы	

                            					
                            				}
                            					if(value_entered == "!cls"){ // Если введена команда !cls                            			
 													Clear(); // Функция очищения рабочей области
                            					}
                            						if(value_entered =="!info"){ // Если введена команда !info
                            							Clear(); // Функция очищения рабочей области
                            							Information(); // Функция показа основной информации
                            						}
                            							if(value_entered == "!getIP"){ // Если введена команда !getIP
                            								Clear();
                            									$.getJSON('getip.php', function(data){
  																document.getElementById("String1").innerHTML = ("Your ip : " + data.ip);
  																var style_string = document.getElementById("String1"); // Получение елемента по ID 
  																style_string.style.color = "#ebe0df";// Установка цвета для команд на белый
  																style_string.style.fontSize = "15px";// Размер шрифта
  																style_string.style.fontWeight = "bolder";// Жирный шрифт
  																style_string.style.float = "left";// Позиционирование слева от страницы	
																});
                            							}
                            								if(value_entered == "!Vk"){// Если введенное значение равно !Vk
                            									Clear();// Очищение рабочей области								
                            										document.getElementById("String1").innerHTML = ("<a href=\"https://vk.com\" target=\"_blank\">Перейти в Вк!</a>");// Добавляет ссылку для перехода в вк а также ссылка открывается в новом окне	
	                            										var style_string = document.getElementById("String1"); // Получение елемента по ID 
  																			style_string.style.color = "#ebe0df";// Установка цвета для команд на белый
  																			style_string.style.fontSize = "15px";// Размер шрифта
  																			style_string.style.fontWeight = "bolder";// Жирный шрифт
  																			style_string.style.float = "left";// Позиционирование слева от страницы	
                            								}
                            									if(value_entered == "!Stack"){
                            										Clear();
                            											document.getElementById("String1").innerHTML = ("<a href=\"https://ru.stackoverflow.com/questions\" target=\"_blank\">Перейти на StackOverFlow!</a>");// Добавляет ссылку для перехода в вк а также ссылка открывается в новом окне	
	                            										var style_string = document.getElementById("String1"); // Получение елемента по ID 
  																			style_string.style.color = "#ebe0df";// Установка цвета для команд на белый
  																			style_string.style.fontSize = "15px";// Размер шрифта
  																			style_string.style.fontWeight = "bolder";// Жирный шрифт
  																			style_string.style.float = "left";// Позиционирование слева от страницы	
                            									}
                            										if(value_entered == "!EnglishVersion"){
                            											Clear();
                       														document.getElementById("String1").innerHTML = ("<a href=\"file:///D:/%D0%BC%D0%B0%D0%BC%D0%B8%D0%BD%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%81%D1%82/MyCMD/MyCMDe.html\">English Version</a>");
                            										}
                            											if(value_entered == "!MusicVk"){
                            											  Clear();	
                            												document.getElementById("String1").innerHTML = ("<a href=\"https://vk.com/music\" target=\"_blank\">Музыка вк!</a>");
                            											}
                            												
                            							
									}
										else{		 // Если введено обычное слово, а не команда
											Clear(); // Функция очищения рабочей области
											document.getElementById("String1").innerHTML = "Слово " + value_entered + " не является командой!"; // Информирование пользователя об ошибке ввода
										}
				    			}
					}
				 

					
				


			





				


			

				


			
