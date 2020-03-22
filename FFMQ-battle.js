var enemies = [
    "id", // enemy 1 (center)
    "id", // enemy 2 (right, optional)
    "id"  // enemy 3 (left, optional)
];

var Monster = {
    introduce: function () {
        window.addName( this.name );
    },
    attack: function () {
        var selectedAbility = this.abilities[ Math.rand() ];
        var target = heroes[ Math.rand() ];
        
        alert(selectedAbility.name);
        target.hp = target.hp - selectedAbility.damage;
    },
    die: function () {
        this.fadeOut();
        this.destroy();
    }
}
// Behemoth Boss Monster
monsters.db [
{
    _id: 1,
    img: ["behemoth100.png", "behemoth50.png", "behemoth25.png"],
    name: "Behemoth",
    hp: 100,
    maxHp: 100,
    abilities: [
        {
            name: "Horn",
            damage: 6
        }
    ]
},
{
    _id: 2,
    img: ["brownie100.png", "brownie50.png"],
    name: "Brownie",
    hp: 100,
    maxHp: 100,
    abilities: [
        {
            name: "Kick",
            damage: 11
        },
        {
            name: "Punch",
            damage: 8
        }
    ]
},
{
    _id: 3,
    img: ["slime100.png", "slime50.png"],
    name: "Slime",
    hp: 100,
    maxHp: 100,
    abilities: [
        {
            name:"Hydro Acid",
            damage: 10
        },
        {   
            name: "Stab",
            damage: 12
        }
    ]
}
];