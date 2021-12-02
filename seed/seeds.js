const sequelize = require('../config/connection');
const { User, Comment, Place, Reaction, Vote } = require('../models');

const seed = async () =>{
    const placeData = await Place.bulkCreate([
        {
            name:"Wendy's",
            location:"2543 Rainier Ave S, Seattle, WA 98144, United States",
            isJob:"establishment",
            ref_id:"ChIJN-AX2olqkFQR2-zBAMus6gM"
        },
        {
            name:"Zulily",
            location:"2601 Elliott Ave #200, Seattle, WA 98121, United States",
            isJob:'job',
            ref_id:"ChIJHxJ26FEVkFQRqzHeF-ZO1SM"
        },
        {
            name:"JOEY U-Village",
            location:"2603 NE 46th St, Seattle, WA 98105, United States",
            isJob:"establishment",
            ref_id:"ChIJD5DyOI8UkFQR7zCbOa_IwIg"
        },
        {
            name:"Amazon",
            location:"410 Terry Ave N, Seattle, WA 98109, United States",
            isJob:"job",
            ref_id:"ChIJLxQbczcVkFQRdbUrsaQMltc"
        },
        {
            name:"Starbucks Reserve Roastery",
            location:"1124 Pike St, Seattle, WA 98101, United States",
            isJob:"establishment",
            ref_id:"ChIJsU30zM1qkFQRbnOm1_LBoG0"
        },
        {
            name:"Sol Boba",
            location:"8718 S Tacoma Way B, Lakewood, WA 98499, United States",
            isJob:"establishment",
            ref_id:"ChIJ6TDK7SwBkVQROnNJiR7pHoA"
        },
        {
            name:"Nintendo of America",
            location:"4600 150th Ave NE, Redmond, WA 98052, United States",
            isJob:"job",
            ref_id:"ChIJrSPz5mltkFQRvP-GY6jZyBs"
        },
        {
            name:"Neumos",
            location:"925 E Pike St, Seattle, WA 98122, United States",
            isJob:"establishment",
            ref_id:"ChIJlzLaQcxqkFQRFZxIfCBD8rA"
        },
        {
            name:"Apple University Village",
            location:"2651 NE 49th St, Seattle, WA 98105, United States",
            isJob:"establishment",
            ref_id:"ChIJFRORAoYUkFQReDCsi3wez8A"
        },
        {
            name:"Semicolon Cafe",
            location:"10451 NE 2nd St, Bellevue, WA 98004, United States",
            isJob:"establishment",
            ref_id:"ChIJNW7BbmZtkFQRdwg-vYKnGXs"
        }
    ])
    const userData = await User.bulkCreate([
        {
            username:"joe",
            email:"joe@joe.joe",
            password:"password",
            favoritePet:"cats"
        },
        {
            username:'louis',
            email:"louis@joe.joe",
            password:'password',
            favoritePet:'cat'
        },
        {
            username:'brett',
            email:'brett@joe.joe',
            password:'password',
            favoritePet:'dog'
        },
        {
            username:'michael',
            email:'michael@joe.joe',
            password:'password',
            favoritePet:'dog'
        }
    ])
    const commentData = await Comment.bulkCreate([
        {
            UserId:1,
            PlaceId:2,
            comment:"best place for pets!"
        },
        {
            UserId:4,
            PlaceId:5,
            comment:"best place for pets!"
        },
        {
            UserId:2,
            PlaceId:9,
            comment:"best place for pets!"
        },
        {
            UserId:2,
            PlaceId:3,
            comment:"best place for pets!"
        },
        {
            UserId:1,
            PlaceId:6,
            comment:"best place for pets!"
        },
        {
            UserId:4,
            PlaceId:8,
            comment:"best place for pets!"
        },
        {
            UserId:3,
            PlaceId:2,
            comment:"super cool!"
        },
        {
            UserId:1,
            PlaceId:4,
            comment:"best place for pets!"
        },
        {
            UserId:1,
            PlaceId:1,
            comment:"best place for pets!"
        },
        {
            UserId:3,
            PlaceId:5,
            comment:"best place for pets!"
        },
        {
            UserId:4,
            PlaceId:7,
            comment:"best place for pets!"
        },
        {
            UserId:1,
            PlaceId:10,
            comment:"best place for pets!"
        },
    ])
    const voteData = await Vote.bulkCreate([
        {
            UserId:1,
            PlaceId:3,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:2,
            PlaceId:3,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:3,
            PlaceId:3,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:2,
            PlaceId:1,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:4,
            PlaceId:2,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:3,
            PlaceId:4,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:1,
            PlaceId:5,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:2,
            PlaceId:6,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:2,
            PlaceId:7,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:2,
            PlaceId:8,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:3,
            PlaceId:9,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:2,
            PlaceId:10,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        },
        {
            UserId:3,
            PlaceId:3,
            hasStipendUp:true,
            hasStipendDown:false,
            canBringUp:true,
            canBringDown:false,
            hasMenuUp:true,
            hasMenuDown:false,
            petTimeOffUp:false,
            petTimeOffDown:true
        }
    ])
}

sequelize.sync({force:true}).then(()=>{
    seed();
})