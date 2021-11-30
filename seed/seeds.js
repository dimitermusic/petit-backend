const sequelize = require('../config/connection');
const { User, Comment, Place, Reaction, Vote } = require('../models');

const seed = async () =>{
    const placeData = await Place.bulkCreate([
        {
            name:"Wendy's",
            address:"2543 Rainier Ave S, Seattle, WA 98144, United States",
            isJob:"establishment",
            ref_id:"ChIJN-AX2olqkFQR2-zBAMus6gM"
        },
        {
            name:"Zulily",
            address:"2601 Elliott Ave #200, Seattle, WA 98121, United States",
            isJob:'job',
            ref_id:"ChIJHxJ26FEVkFQRqzHeF-ZO1SM"
        },
        {
            name:"JOEY U-Village",
            address:"2603 NE 46th St, Seattle, WA 98105, United States",
            isJob:"establishment",
            ref_id:"ChIJD5DyOI8UkFQR7zCbOa_IwIg"
        },
        {
            name:"Amazon",
            address:"410 Terry Ave N, Seattle, WA 98109, United States",
            isJob:"job",
            ref_id:"ChIJLxQbczcVkFQRdbUrsaQMltc"
        },
        {
            name:"Starbucks Reserve Roastery",
            address:"1124 Pike St, Seattle, WA 98101, United States",
            isJob:"establishment",
            ref_id:"ChIJsU30zM1qkFQRbnOm1_LBoG0"
        },
        {
            name:"Sol Boba",
            address:"8718 S Tacoma Way B, Lakewood, WA 98499, United States",
            isJob:"establishment",
            ref_id:"ChIJ6TDK7SwBkVQROnNJiR7pHoA"
        },
        {
            name:"Nintendo of America",
            address:"4600 150th Ave NE, Redmond, WA 98052, United States",
            isJob:"job",
            ref_id:"ChIJrSPz5mltkFQRvP-GY6jZyBs"
        },
        {
            name:"Neumos",
            address:"925 E Pike St, Seattle, WA 98122, United States",
            isJob:"establishment",
            ref_id:"ChIJlzLaQcxqkFQRFZxIfCBD8rA"
        },
        {
            name:"Apple University Village",
            address:"2651 NE 49th St, Seattle, WA 98105, United States",
            isJob:"establishment",
            ref_id:"ChIJFRORAoYUkFQReDCsi3wez8A"
        },
        {
            name:"Semicolon Cafe",
            address:"10451 NE 2nd St, Bellevue, WA 98004, United States",
            isJob:"establishment",
            ref_id:"ChIJNW7BbmZtkFQRdwg-vYKnGXs"
        }
    ])
}

sequelize.sync({force:true}).then(()=>{
    seed();
})