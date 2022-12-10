// 
	hospede_lista = [];
		var i = 0;
        var nomehotel = prompt("Olá! Por favor, qual o nome do hotel?")
        alert("O nome do hotel é " + nomehotel);
		var p = 0;

        //Faz a autenticação do usuário e é definido o valor da senha.
        var usuario = prompt("---Autenticação---\n Usuário: ");
        const senha = 1234;
        
        
        while(i < 1){         
            if(usuario != ""){ // Se usuário for "não igual" a " vai perguntar a senha.
                var password = parseInt(prompt("---Autenticação---\n Usuário: " + usuario + "\n Senha: "));               
                if (password != 1234){ //Se a senha for "não igual" a 1234 vai exibir "Senha incorreta" e vai perguntar novamente
                    alert("Ops... Senha incorreta! Por favor, tente novamente.");
                } else { //Caso a senha for 1234 encerra o loop e inicia o programa finalmente.
                    i++;
                    inicio();
                }
            } else{ //Caso o usuário seja invalido vai perguntar mais uma vez.
                usuario = prompt("---Autenticação---\n Insira um usuário válido! \n Usuário:")
            }
        }
        

		function inicio() {
			

			var escolha = parseInt(prompt('Bem vindo ao Hotel ' + nomehotel + '! ' + usuario + ', é um imenso prazer ter você por aqui.\nSelecione uma opção\n 1.) Reserva de Quartos\n 2.) Cadastro de Hóspedes\n 3.) Pesquisar e Cadastrar Hóspedes \n 4.) Contrate Eventos\n 5.) Hora de Comer \n 6.) Alugar Auditório \n 7.) Reservar Restaurante \n 8.) Abastecimento de Carros\n 9.) Manutenção de aparelhos \n 10.) Sair'));

			switch(escolha){
				case 1:
					reserva_quartos();
					break;
				case 2:
					cadastro_hospedes();
					break;
				case 3:
					escolha_cadastro();
					break;
				case 4:
					contrate_evento();
					break;
				case 5:
					hora_de_comer();
					break;
				case 6:
					alugar_auditorio();
					break;
				case 7:
					reserva_restaurante();
					break;
				case 8:
					abastecer_carros();
					break;
				case 9:
					manutencao_ar();
					break;
				case 10:
					sair();
					break;
				default:
					erro();
					break;
			}
		}		

		function reserva_quartos() {
			alert('HOTEL '+ nomehotel +' - RESERVA DE QUARTOS');
			var valor_diaria = parseFloat(prompt("Qual o valor da diária?"));
			var nome_hospede;

			if(valor_diaria <= 0){
				alert("Oops... Valor inválido!")
				inicio();
			} else{
				var quantas_diarias = parseInt(prompt("Quantas diárias serão necessaria?"));

				if(quantas_diarias <= 0 || quantas_diarias > 30){
					alert("Oops... Valor inválido!")
					inicio();
				} else {
					var valor_total = quantas_diarias * valor_diaria;
					alert("O valor de " + quantas_diarias + " dias de hospedagem é " + valor_total);
					nome_hospede = prompt("Qual o nome do hóspede?");
					
					if(nome_hospede != ""){
						var yes_no = prompt(usuario + ", você confirma a hospedagem para " + nome_hospede + " por " + quantas_diarias + "? S/N");
						if(yes_no == "S"){
							alert(usuario + ", reserva efetuada para " + nome_hospede + ". O valor total é de " + valor_total);
							inicio();
						} else if(yes_no == "N"){
							alert(usuario + ", reserva não efetuada.");
							inicio();
						}						
					} else {
						alert("Insira um nome válido");
						inicio();
					}

				}

			}
		}

		function cadastro_hospedes() {
			alert('HOTEL '+ nomehotel +' - CADASTRO DE HÓSPEDES');
			var valor_diaria = parseFloat(prompt("Qual o valor da diária?"));
			var diaria_meia;
			var i = 0;
			var t = 0;
			var gratuidade = 0;
			var meia = 0;			
			var hospede;
			var idade_hospede;

			while(i < 1){
				hospede = prompt("Qual o nome do hóspede?");
				if(hospede == "PARE"){
					diaria_meia = (valor_diaria / 2) * meia;
					var total = valor_diaria * t + diaria_meia;
					alert(usuario + ", o total de hospedagem é: " + total + "; " + gratuidade + " Gratuidade(s) e " + meia +  "Meia(s)" );					
					i++;
				} else{
					idade_hospede = parseInt(prompt("Qual a idade do hóspede?"));
					if(idade_hospede <= 6){
						alert(hospede + " Possui gratuidade");
						gratuidade++;
					} else if(idade_hospede >= 60){
						alert(hospede + " Paga meia");
						meia++;					
					} else{
						alert(hospede + " Cadastrado com sucesso");
						t++;
					}
				}

			}
			inicio();
		}

		

		function abastecer_carros() {
			var nomes = {
				'alcool': "álcool",
				'gasolina': "gasolina",
				'wayne': "Wayne Oil",
				'stark': "Start Petrol"
			}

			var valor_alcool_1 = parseFloat(prompt(`Qual o valor do álcool no posto ${nomes['wayne']}?`));
			var valor_gasolina_1 = parseFloat(prompt(`Qual o valor da gasolina no posto ${nomes['wayne']}?`));
			var valores_wayne = {
				'alcool': valor_alcool_1 * 42,
				'gasolina': valor_gasolina_1 * 42,
				'total': parseInt((valor_alcool_1 * 100) / valor_gasolina_1),
		
			}
			var wayne_porcentagem = 100 - valores_wayne['total'];

			var valor_alcool_2 = parseFloat(prompt(`Qual o valor do álcool no posto ${nomes['stark']}?`));
			var valor_gasolina_2 = parseFloat(prompt(`Qual o valor da gasolina no posto ${nomes['stark']}?`));
			var valores_stark = {
				'alcool': valor_alcool_2 * 42,
				'gasolina': valor_gasolina_2 * 42,
				'total': parseInt((valor_alcool_2 * 100) / valor_gasolina_2)
			}
			var stark_porcentagem = 100 - valores_wayne['total'];

			if(wayne_porcentagem >= 30 || stark_porcentagem >= 30){ // verifica se o alcool esta 30% mais barato que a gasolina
				if(wayne_porcentagem < stark_porcentagem){ //verifica se o alcool do posto wayne esta mais barato que o posto stark
					alert(usuario + ", é mais barato abastecer com álcool no posto " + nomes['stark']);
					inicio();
				}
				alert(usuario + ", é mais barato abastecer com álcool no posto " + nomes['wayne']);
				inicio();
			} else {
				if(valores_wayne['gasolina'] > valores_stark['gasolina']){
					alert(usuario + ", é mais barato abastecer com gasolina no posto " + nomes['stark']);
					inicio();
				}
				alert(usuario + ", é mais barato abastecer com gasolina no posto " + nomes['wayne']);
				inicio();
			}

		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 10');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert("Muito obrigado e até logo, " + usuario)
				window.close();
			} else {
				inicio();
			}
		}



		//Com S ou com Z

		function escolha_cadastro(){
			var hospede_escola = parseInt(prompt("Cadastro de hospedes\n\nSelecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair"));

			switch(hospede_escola){
				case 1:
					cadastro_hospedes_dois();
					break;
				case 2:
					pesquisar_hospedes();
					break;
				case 3:
					sair_cadastro();
					break;
				default:
					erro_cadastro();
					break;
			}

		}

		function cadastro_hospedes_dois(){

			if (hospede_lista.length >= 15){
            	alert("Máximo de hóspedes cadastrados");
				escolha_cadastro();
        	} else {
            	var nome_hospede = prompt("Qual o nome do(a) hóspede?");

            	hospede_lista.push(nome_hospede);
         		alert("Parabens! Hóspede " + nome_hospede + " foi cadastrado(a) com sucesso");
            	escolha_cadastro();
        	}

		}
		function pesquisar_hospedes(){
			var nome_hospede_cadastro = prompt("Qual o nome do hóspede?");
			if(hospede_lista.includes(nome_hospede_cadastro)){// O método includes() procura por um elemento dentro do Array e retorna verdadeiro ou falso. Caso queira comparar números, o mais indicado é o método find();
				alert("Hóspede " + nome_hospede_cadastro + " foi encontrado(a)");
				escolha_cadastro();
			} else {
				alert("Hóspede " + nome_hospede_cadastro + " não foi encontrado(a)");
				escolha_cadastro();
			}

		}
		function sair_cadastro(){
			var confirm = confirm("Deseja mesmo sair?");

			if(confirm){
				inicio();
			}else{
				escolha_cadastro();
			}
		}
		function erro_cadastro() {
			alert('Por favor, informe um número entre 1 e 3');
			cadastro_hospedes_dois();
		}

		//Contrate Eventos

		function contrate_evento(){
			var garcom_hora = 10.50;
			var garcom_total;
			var total;
			var duracao_evento = parseInt(prompt("Quantas horas o evento vai durar?"));
			var garcom_necessarios = parseInt(prompt("Quantos garções são necessários?"));
			garcom_total = garcom_necessarios * garcom_hora;
			total = garcom_total * duracao_evento;
			var efetuar_reserva = prompt("Custo total: R$ " + total + "\n\nGostaria de efetuar a reserva? S/N");
			if(efetuar_reserva == "S"){
				alert(usuario + " Reserva efetuada com sucesso!")
				inicio();
			} else if(efetuar_reserva == "N"){
				alert(usuario + " Reserva não efetuada");
				inicio();
			} else{
				alert("Insira apenas S ou N");
				contrate_evento();
			}

		}

		
		function hora_de_comer(){
			var numero_pessoas = parseInt(prompt("Qual o número de convidados?"));
			var quantidade = {
				'salgado': 7 * numero_pessoas,
				'cafe': 0.2 * numero_pessoas,
				'agua': 0.5 * numero_pessoas

			}
			var preco_7_salgados = 2.38;
			var preco_cafe = quantidade['cafe'] * 0.80;
			var preco_agua = quantidade['agua'] * 0.40;
			var preco_salgados = 2.38 * numero_pessoas;
			var total = preco_salgados + preco_agua + preco_cafe;


			if(numero_pessoas > 350){
				alert('Número de convidados é  superior da capacidade máxima');
				hora_de_comer();

			}else if(numero_pessoas <= 0){
				alert("Numero inválido de pessoas!");
				hora_de_comer();
			}else{
				var confirm = prompt(`O evento precisará de ${quantidade['cafe']} litros de café, ${quantidade['agua']} litros de água, ${quantidade['salgado']} salgados. O custo total será de ${total} \n Deseja efetuar a reserva? S/N`);

				if(confirm == "S"){
					alert(usuario + ", reserva efetuada com sucesso!");
					inicio();
				} else if(confirm == "N"){
					alert(usuario + ", reserva efetuada não efetuada");
					inicio();
				} else{
					alert("Insira apenas S ou N");
					hora_de_comer();
				}
			}
		}

		function alugar_auditorio(){
			var auditorio_laranja = {
				'cadeiras': 150,
				'adicionais': 70,			
			}
			var total_auditorio = auditorio_laranja['cadeiras'] + auditorio_laranja['adicionais']	
			var auditorio_colorado = 350;
			var numero_convidados = parseInt(prompt("Qual o número de convidados?"));

		
			if(numero_convidados > 350){
				alert("Número máximo de convidados excedido!");
				alugar_auditorio();

			} else if (numero_convidados <= total_auditorio){ // se numero convidados for menos que 220
				if(numero_convidados > auditorio_laranja['cadeiras']){ // se numero convidados for maior que 150
					var cadeiras_adicionais = {
						'cadeiras_sobram': total_auditorio - numero_convidados, // 220 - numero de convidados
					}
					var cadeiras_add = auditorio_laranja['adicionais'] - cadeiras_adicionais['cadeiras_sobram'] // cadeiras adicionais - cadeiras adicionais que precisa
					var efetuar_reserva = prompt("O auditório Laranja é perfeito para você. (Inclua mais " + cadeiras_add + " cadeiras) \n\n Deseja efetuar a reserva? S/N");
					if (efetuar_reserva == "S"){
						alert(`${usuario}, reserva para o auditório Laranja concluida com sucesso!`);
						inicio();
					}else if(efetuar_reserva == "N"){
						alert(`${usuario}, reserva para o auditório Laranja não concluida`);
						inicio();
					}else{
						alert("Insira apenas S ou N");
						alugar_auditorio();
					}
					
				}

			} else if (numero_convidados > total_auditorio){
					var efetuar_reserva = prompt("O auditório Colorado é perfeito para você. \n\n Deseja efetuar a reserva? S/N");
					if (efetuar_reserva == "S"){
						alert(`${usuario}, reserva para o auditório Colorado concluida com sucesso!`);
						inicio();
					}else if(efetuar_reserva == "N"){
						alert(`${usuario}, reserva para o auditório Colorado não concluida`);
						inicio();
					}else{
						alert("Insira apenas S ou N");
						alugar_auditorio();
					}

			}

		}

		function reserva_restaurante(){
			var dia_da_semana = prompt("Qual o dia do evento?");
			var horario_do_evento;

			if(dia_da_semana == "segunda" || dia_da_semana == "terca" || dia_da_semana == "quinta" || dia_da_semana == "sexta"){
				horario_do_evento = parseInt(prompt("Qual a hora do evento?"));

				if(horario_do_evento < 7 || horario_do_evento > 23){
					alert("Oops... Reserva indisponivel nesse horário!");
					reserva_restaurante();

				} else {
					var nome_empresa = prompt("Qual o nome da empresa?");
					alert(`Restaurante reservado para ${nome_empresa}. ${dia_da_semana} ás ${horario_do_evento}hrs`)
					inicio();

				}

			} else if (dia_da_semana == "sabado" || dia_da_semana == "domingo"){
				horario_do_evento = parseInt(prompt("Qual a hora do evento?"));
				
				if(horario_do_evento < 7 || horario_do_evento > 15){
					alert("Oops... Reserva indisponivel nesse horário!");
					reserva_restaurante();

				}else {
					var nome_empresa = prompt("Qual o nome da empresa?");
					alert(`Restaurante reservado para ${nome_empresa}. ${dia_da_semana} ás ${horario_do_evento}hrs`);
					inicio();
				}

			} else{
				alert("Oops... Parece que você colocou algum dia inexistente. Tente novamente.");
				reserva_restaurante();
			}



		}
		
		

		function manutencao_ar(){
			var nome_empresas = [];
			var valor_produtos = [];
        	var i = 0;
			var e = 0;

			while(i < 1){
				
				var nome_empresa = prompt("Qual o nome da empresa?");
				nome_empresas.push(nome_empresa);
				var valor_aparelho = parseInt(prompt("Qual o valor por aparelho?"));
				var quantidade = parseInt(prompt("Qual a quantidade de aparelhos?"));
				var porcentagem = parseInt(prompt("Qual a porcentagem de desconto?"));
				var num_min = parseInt(prompt("Qual o número minimo de aparelhos para ter desconto?"));
				var valor = valor_aparelho * quantidade;
				var desconto = (100 - porcentagem) / 100;
				var valor_descontado = valor * desconto;
				valor_produtos.push(valor_descontado);
				var min = Math.min(...valor_produtos)

				if(valor_descontado == min){
					e++;
				}

				alert(`O serviço de ${nome_empresa} custará R$${valor}`);
				var pesquisa = prompt(`Deseja introduzir novos dados, ${usuario}? S/N`)

				if(pesquisa == "S"){

				} else if (pesquisa == "N"){
					i++;
				} else {
					alert("Insira apenas S ou N");
					manutencao_ar();
				}

			}

			var pegar_nome_empresa = nome_empresas[e - 1];

			alert(`O orçamento de menor valor é o [${pegar_nome_empresa} por R$${min.toFixed(2)}]`);
			inicio();



		} //
