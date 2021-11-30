const sequelize = require('../config/connection');
const { User, Comment, Place, Reaction, Vote } = require('../models');

const seed = async () =>{
    const placeData = await Place.bulkCreate([
        {
            name:"Wendy's",
            isJob:"establishment",
            ref_id:"ChIJN-AX2olqkFQR2-zBAMus6gM"
        },
        {
            name:"Zulily",
            isJob:'job',
            ref_id:"ChIJHxJ26FEVkFQRqzHeF-ZO1SM"
        },
        {
            name:"JOEY U-Village",
            isJob:"establishment",
            ref_id:"ChIJD5DyOI8UkFQR7zCbOa_IwIg"
        },
        {
            name:"Amazon",
            isJob:"job",
            ref_id:"ChIJO8aGizcVkFQRuPaZ04yPPY8"
        },
        {
            name:"Starbucks Reserve Roastery",
            isJob:"establishment",
            ref_id:"ChIJsU30zM1qkFQRbnOm1_LBoG0"
        },
        {
            name:"Sol Boba",
            isJob:"establishment",
            ref_id:"ChIJ6TDK7SwBkVQROnNJiR7pHoA"
        },
        {
            name:"Nintendo of America",
            isJob:"job",
            ref_id:"ChIJrSPz5mltkFQRvP-GY6jZyBs"
        },
        {
            name:"Neumos",
            isJob:"establisment",
            ref_id:"ChIJlzLaQcxqkFQRFZxIfCBD8rA"
        },
        {
            name:"Apple University Village",
            isJob:"establishment",
            ref_id:"ChIJFRORAoYUkFQReDCsi3wez8A"
        },
        {
            name:"Semicolon Cafe",
            isJob:"establishment",
            ref_id:"ChIJNW7BbmZtkFQRdwg-vYKnGXs"
        }
    ])
}

sequelize.sync({force:true}).then(()=>{
    seed();
})