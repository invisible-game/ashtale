function calculate() {
    var physicalDamage = parseFloat(document.getElementById("physicalDamage").value);
    var intimidation = parseFloat(document.getElementById("intimidation").value);
    var bossDamage = parseFloat(document.getElementById("bossDamage").value);
    var monsterDamage = parseFloat(document.getElementById("monsterDamage").value);
    var abnormalDamage = parseFloat(document.getElementById("abnormalDamage").value);
    var highHPDamage = parseFloat(document.getElementById("highHPDamage").value);
    var lowHPDamage = parseFloat(document.getElementById("lowHPDamage").value);
    var criticalDamage = parseFloat(document.getElementById("criticalDamage").value);
    var criticalRate = parseFloat(document.getElementById("criticalRate").value);
    var damageMultiplier = parseFloat(document.getElementById("damageMultiplier").value);
    var attack = parseFloat(document.getElementById("attack").value);
    var bossAttack = parseFloat(document.getElementById("bossAttack").value);
    var monsterAttack = parseFloat(document.getElementById("monsterAttack").value);
    var defenseIgnore = parseFloat(document.getElementById("defenseIgnore").value);
    var Damage = parseFloat(document.getElementById("Damage").value);
  
    var result = (attack + (bossAttack + monsterAttack) / 2) / 50 *
            (1 + physicalDamage / 100) * 
            (1 + damageMultiplier) * 
            (1 + ((bossDamage + monsterDamage) / 2 )/ 100) * 
            (1 + (abnormalDamage + (highHPDamage + lowHPDamage) / 2) / 100) * 
            (1 + Math.min(defenseIgnore, 100) / 100) * 
            (1 + (Math.min(criticalRate, 180) / 100) * (criticalDamage - 100) / 100) * 
            (1 + intimidation / 1000) *
            (1 + Damage / 100);
    document.getElementById("result").innerHTML = "PVE攻撃能力評価: " + result;
}
  