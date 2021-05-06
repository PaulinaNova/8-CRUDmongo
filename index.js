var mongoose = require("mongoose");
var schema = require("./scheme");

mongoose.connect('mongodb://localhost:27017/eje05');

//Parametros: nombre del modelo, esquema, nombre de la conexión
var Post = mongoose.model('Post', schema, 'posts');

let Post = new Post({
    title:"Una nueva entrada",
    author: "Paulina Nova",
    comments: [{
        body:"Esto es un nuevo comentario",
        date: new Date()
    }],
    date: new Date(),
    hidden:true,
    meta:{
        votes:30,
        favs:15
    }
});

student.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Creación exitosa");
    process.exit(0);
});

Post.find(function (error, docs) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log('Consulta general ');
    console.log(docs);

    Post.find({ _id: '6090115f79026b05081c0f70' },
        function (error, docs) {
            if (error) {
                console.log(error);
                process.exit(1);
            }
            console.log('Consulta post');
            console.log(docs);

        Post.update({ _id: '6090115f79026b05081c0f70' },
            { $set: { hidden: false } },
            function (error, docs) {
                if (error) {
                    console.log(error);
                }
                console.log('Actualizado');
                console.log(docs);

            Post.find(function (error, docs) {
                if (error) {
                    console.log(error);
                    process.exit(1);
                }
                console.log('Consulta actualizar');
                console.log(docs);

                Post.findByIdAndRemove({ _id: '6090115f79026b05081c0f70' },
                    function (error, docs) {
                        if (error) {
                            console.log(error);
                        }
                        console.log('Eliminado');
                        console.log(docs);

                        Post.find(function (error, docs) {
                            if (error) {
                                console.log(error);
                                process.exit(1);
                            }
                            console.log('Consulta eliminar');
                            console.log(docs);
                        });
                    });
                });
            });
        });
    });
