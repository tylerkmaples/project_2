module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        text_limit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        freezeTableName: true
    });
    Book.associate = function(models) {
        models.Book.hasMany(models.Author);
    };
    Book.associate = function(models) {
        models.Book.hasMany(models.Post)
    };
    // Book.associate = function(models) {
    //     Book.belongsTo(models.User, {
    //         onDelete: "CASCADE",
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Book;
};