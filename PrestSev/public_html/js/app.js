/* global matriculaController, servicosController, firebase */

window.onload = () => {
    app.init();
};

var app = {};

app.init = () => {
    app.showLogin();
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAcs4CPUMau0P28wtPM2xoZXREkEi24ryc",
        authDomain: "prestserv-119af.firebaseapp.com",
        databaseURL: "https://prestserv-119af.firebaseio.com",
        projectId: "prestserv-119af",
        storageBucket: "prestserv-119af.appspot.com",
        messagingSenderId: "956019663640",
        appId: "1:956019663640:web:de8e8f4e05b5f0a3a4746d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
};

app.hideDivs = () => {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#novoUsuario").style.display = "none";
    document.querySelector("#esqueciSenha").style.display = "none";
    document.querySelector("#principal").style.display = "none";
    document.querySelector("#servicoForm").style.display = "none";
    document.querySelector("#servicoList").style.display = "none";
    document.querySelector("#creditos").style.display = "none";
};

app.showLogin = () => {
    app.hideDivs();
    document.querySelector("#login").style.display = "block";
};

app.showNovoUsuario = () => {
    document.querySelector("#tEmailNovo").value = "";
    document.querySelector("#tSenha1Novo").value = "";
    document.querySelector("#tSenha2Novo").value = "";
    app.hideDivs();
    document.querySelector("#novoUsuario").style.display = "block";
};

app.showEsqueciSenha = () => {
    document.querySelector("#tEmailEsqueci").value = "";
    app.hideDivs();
    document.querySelector("#esqueciSenha").style.display = "block";
};

app.showPrincipal = () => {
    app.hideDivs();
    document.querySelector("#principal").style.display = "block";
};

app.showAddServico = () => {
    app.hideDivs();
    document.querySelector("#servicoForm").style.display = "block";
};

app.showListServico = () => {
    app.hideDivs();
    document.querySelector("#servicoList").style.display = "block";
};

app.showCreditos = () => {
    app.hideDivs();
    document.querySelector("#creditos").style.display = "block";
}

//"EVENTOS"
app.addUsuario = (event) => {
    event.preventDefault();
    let email = document.querySelector("#tEmailNovo").value;
    let senha1 = document.querySelector("#tSenha1Novo").value;
    let senha2 = document.querySelector("#tSenha2Novo").value;
    if (senha1 === senha2) {
        firebase.auth().createUserWithEmailAndPassword(email, senha1).then(() => {
            alert("Usuário cadastrado com sucesso");
            app.showLogin();
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    } else {
        alert("Senhas não correspondem");
    }
};

app.authUsuario = (event) => {
    event.preventDefault();
    let email = document.querySelector("#tEmail").value;
    let senha = document.querySelector("#tSenha").value;
    firebase.auth().signInWithEmailAndPassword(email, senha).then(() => {
        app.showPrincipal();
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
};

app.logoffUsuario = () => {
    firebase.auth().signOut().then(() => {
        document.querySelector("#tEmail").value = "";
        document.querySelector("#tSenha").value = "";
        app.showLogin();
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
};

app.esqueciSenha = (event) => {
    event.preventDefault();
    let email = document.querySelector("#tEmailEsqueci").value;
    firebase.auth().sendPasswordResetEmail(email).then(() => {
        app.showLogin();
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
};

app.addServico = (event) => {
    event.preventDefault();
    let nome = document.querySelector("#tNome").value;
    let categoria = document.querySelector("#cCategoria").value;
    let descricao = document.querySelector("#tDescricao").value;
    let contato = document.querySelector("#tContato").value;

    firebase.firestore().collection("Servicos").add({
        nome: nome,
        categoria: categoria,
        descricao: descricao,
        contato: contato
    }).then(function () {
        alert("Document successfuddlly written!");
        app.showPrincipal();
    }).catch(function (error) {
        alert("Error writing document: " + error);
    });
};

app.remServico = (id) => {
    firebase.firestore().collection("Servicos").doc(id).delete().then(function (doc) {
        app.listServico();
    }).catch(function (error) {
        alert("Falha ao remover o serviço");
        app.listServico();
    });
};

app.listServico = (categoria) => {
    console.log(categoria);
    firebase.firestore().collection("Servicos").where("categoria", "==", categoria).get().then((query) => {
        let html = "<br/>";
        html += "<button class='voltar' onclick='app.showPrincipal()'>Voltar</button>";
        html += "<h1>" + categoria + "</h1>";
        html += "<table width='100%' border='1'>";
        html += "<tr><th>Serviço<th>";
        query.forEach((doc) => {
            let servico = doc.data();
            html += "<tr><td>" + servico.nome;
            html += "<td><button class='abrir' onclick='app.loadServico(\"" + doc.id + "\")'>Visualizar</button>";
			html += "<td><button class='' onclick='app.remServico(\"" + doc.id + "\")'>remover</button>";
        });
        html += "</table>";
        app.showListServico();
        document.querySelector("#servicoList").innerHTML = html;
    }).catch((error) => {
        alert("Erro");
    });
};

app.loadServico = (id) => {
    firebase.firestore().collection("Servicos").doc(id).get().then((doc) => {
        if (!doc.exists) {
            alert('No such document!');
        } else {
            var html = "<h1>"+doc.data().categoria+"</h1>";
            html += "<b>Nome: </b>"+doc.data().nome+"<br/>";
            html += "<b>Descrição: </b>"+doc.data().descricao+"<br/>";
            html += "<b>Contato: </b>"+doc.data().contato+"<br/><br/>";
            jsPopupBox.alert(html);
        }
    }).catch((error) => {
        alert("Erro");
    });

};

app.termos = () => {
    var msg = "<p><h1>Termos de Uso</h1>";
    msg += "<h2>DEFINIÇÕES</h2>Os presentes termos e condições abaixo explicam e regem o modo como os serviços oferecidos pelo software “PrestServ” devem ser usados e seguidos pelos usuários (pessoas físicas ou jurídicas) que o utilizaram. A contratação dos serviços se dará com a concordância e manifestação de ciência total de todos os Termos, Políticas e Contratos relativos ao Serviço presentes neste documento.<br/><br/><b>Cláusula 1ª</b> – Para os efeitos deste instrumento os vocábulos e expressões abaixo têm as seguintes definições: <b>Aplicativo</b> – programa para celular concebido para processar dados eletronicamente, facilitando e reduzindo o tempo de execução de uma tarefa pelo usuário.; <b>Backup</b> – cópia de segurança, mantida e feita pelo usuário, de todos os dados contidos na nuvem; <b>Suporte</b> – Atendimento ao usuário feito através do aplicativo (guia de ajuda), visando esclarecer as dúvidas recorrentes dos mesmos; <b>Licença de uso</b> – Licença que deve ser aceita pelo usuários, para que estes, possam receber a autorização de acesso ao software; <b>Treinamento</b> – Processo de transferência de conhecimento para os usuários finais por meio do “Manual Do Usuário”, visando que os mesmos consigam operar os sistemas corretamente.<br/><h2>DO OBJETO</h2><b>Cláusula 2ª</b> – O objetivo do presente termo é a venda e disposição ao cliente a licença de uso por prazo indeterminado ou até que este realize o cancelamento da conta. <h2>DO PREÇO E DO PAGAMENTO</h2><b>Cláusula 3ª</b> – O software dispõe de uma versão gratuita com opções pagas. A versão gratuita possui propagandas em que o cliente concorda em ver ao utilizá-la e nenhuma outra taxa será cobrada durante o uso do aplicativo. O usuário, apenas, poderá ser cobrado em dois momentos: <br/>•	Quando este desejar se tornar um Usuário Pro. <br/> •	Usuários Pros possuem acesso ao software sem propagandas e têm o direito de escolher uma quantidade de anúncios a ser impulsionados por um preço fixo mensal: <br/>•	Para impulsionar 2 anúncios, será cobrado o valor de R$ 5,00. <br/>•	Para impulsionar 4 anúncios, será cobrado o valor de R$ 7,00. <br/>•	Para impulsionar 6 anúncios, será cobrado o valor de R$ 9,00. <br/>•	Quando desejar impulsionar apenas uma postagem: <br/>•	Se o usuário desejar impulsionar apenas um anúncio, ele pagará o valor de R$3,00 por anúncio. <h2>DAS OBRIGAÇÕES DO PRESTSERV</h2><b>Cláusula 4ª</b> – Constituem obrigações do PrestServ: I – Disponibilizar para o usuário todas as novas atualizações do software objeto deste contrato, sempre que forem lançadas, através da Google Play Store; II – Oferecer Suporte conforme definido na Cláusula 1ª; III – Oferecer Treinamento do sistema, conforme definido na Cláusula 1ª. IV – Manter o software em pleno funcionamento, inclusive no que se refere ao suporte e atualizações, e de forma simultânea. O aplicativo apenas não estará disponível quando os desenvolvedores e provedores, decidirem cancelar o serviço; V – O aplicativo não se responsabiliza pela venda de qualquer produto dentro da plataforma, apenas pela intermediação do encontro entre os vendedores e compradores, agindo apenas como um intermediário entre ambos. <h2>DAS OBRIGAÇÕES DO CLIENTE</h2><b>Cláusula 5ª</b> – Constituem obrigações do usuário: I –  Enviar, sempre que a PrestServ julgar necessário, backup dos dados para análise de problema reportado pelo cliente, estando ciente de que as despesas com envio e retorno serão de responsabilidade do usuário; II – Realizar backups dos dados para recuperação em qualquer caso de necessidade. A PrestServ não se responsabiliza pela perda dos dados, não importando a causa; III – O usuário deve conferir e verificar os trabalhos executados por ele(a) dentro do aplicativo continuamente; IV – Manter seu software atualizado consultando as versões disponíveis no portal; V –  Manter seus dados cadastrais sempre atualizados no aplicativo; VI – Observar os requisitos mínimos de hardware para o software objeto deste contrato. VII – O usuário irá se responsabilizar pelo produto ou o serviço anunciado e pela compra.<h2>DOS TREINAMENTOS</h2><b>Cláusula 6ª</b> – A PrestServ oferecerá treinamento para os usuários através do MANUAL DO USUÁRIO que ficará disponível no aplicativo. <h2>DA VIGÊNCIA</h2><b>Cláusula 7ª</b> – A licença objeto do presente contrato possui tempo vitalício, e durará até quando o usuário desejar excluir sua conta do aplicativo.<br>§ 1º. O descumprimento de qualquer das cláusulas deste contrato importa na sua imediata rescisão, independentemente de qualquer aviso, interpelação, notificação judicial ou extrajudicial.<h2>DO SIGILO</h2><b>Cláusula 8ª</b> – As partes se comprometem a manter as informações que porventura tenham acesso no mais absoluto sigilo, não as divulgando para terceiros sem a autorização expressa da parte proprietária das informações.<br/>Parágrafo único: O disposto no caput deste artigo perde a relevância caso as informações sigilosas de uma das partes sejam requisitadas pelas autoridades administrativas e judiciais.</p>";
    jsPopupBox.alert(msg);
}