let heroi = "Dosuki"
let xp = 5208
let classificacao = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if (xp <= 1000)
{
    xp = classificacao[0]
}
else if (xp >= 1001 && xp <= 2000)
{
    xp = classificacao[1]
}
else if (xp >= 2001 && xp <= 5000)
{
    xp = classificacao[2]
}
else if (xp >= 5001 && xp <= 7000)
{
    xp = classificacao[3]
}
else if (xp >= 7001 && xp <= 8000)
{
    xp = classificacao[4]
}
else if (xp >= 8001 && xp <= 9000)
{
    xp = classificacao[5]
}
else if (xp >= 9001 && xp <= 10000)
{
    xp = classificacao[6]
}
else if (xp >= 10000)
{
    xp = classificacao[7]
}

console.log ("O Herói de nome " + heroi +  " está no nível " + xp)
