const Cliente = require('../models/Clientes');
const mailer = require('nodemailer');

//index, show(unico), add, update, delete

module.exports = {
    async addClient(request, response) {
        const { tipoConta, nome, cpf, telefone, email, cep, cidade, estado, bairro, rua, numero, complemento, tipo, end_secundario} = request.body;
        
        let client = await Cliente.findOne( {cpf})

        if(!client){
            client = await Cliente.create({
                tipoConta,
                nome,
                cpf,
                telefone,
                email,
                cep,
                cidade,
                estado,
                bairro,
                rua,
                numero,
                complemento,
                tipo,
                end_secundario
            });
        }
        
        //Enviar email
        var transporter = mailer.createTransport({
            service: 'yandex',
            auth: {
              user: 'vdreifke@yandex.com',
              pass: 'abcabc123'
            }
          });

          var mailOptions = {
            from: 'vdreifke@yandex.com',
            to: 'vdreifke@yandex.com',
            subject: 'Um usuario foi criado',
            text: 'O usuario ' + nome + ' foi criado com sucesso.' 
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        return response.send('Cliente: ' + nome + ' adicionado no banco de clientes.' + client);
    },
    
    async index(request, response) {
        const clientList = await Cliente.find();

        return response.json(clientList);
    },

    async update(request, response) {
        var id = request.body._id;
        delete request.body_id;
        
        const client = await Cliente.update({_id : id}, request.body, function(err){
            if(err)
                response.send('error');
                
            else{
                console.log("Sucesso");
            }
            
        });

        if(!client){
            console.log('Cliente não encontrado')
        }

        return response.send( 'Cliente alterado.' );
    },

    async destroy(request, response){
        const id = request.query.id;
        const client = await Cliente.findByIdAndRemove(id);
        

        return response.json( 'Cliente ' + client.nome + ' foi removido.');
    }

}