let prompt = require('prompt-sync')();

let inicio = prompt("Podemos começar o nosso Jogo? ")
if(inicio == "s" || inicio == "sim" || inicio == "S" || inicio == "SIM" || inicio == "Sim")
{
    let possibilidades1 = ["Após fugir desse golpe descarado,", "Você comete o erro de entregar seus dados e acaba com todos seus itens roubados, mesmo assim,"]
    let possibilidades2 = ["Rignork enfim atingiu o almejado nível 50", "Depois de várias derrotas em batalha devido ao seu fraco equipamento, Rignork chega ao nível 40 com dificuldade"]
    let possibilidades3 = ["Testando seu novo equipamento, Rignork acaba com todos inimigos em sua frente e avança em direção ao topo de sua jornada", "Após perder quase todos recursos para simples lacaios, Rignork tem sua visão ofuscada por um brilho"]
    let possibilidades4 = ["No melhor estilo Dark Souls, Rignork consegue fugir do gigantesco ogro que estava acabando com sua jornada", "Após ser amassado por dias consecutivos, você finalmente gasta seus últimos recursos e implora ao Ogro que acabe com sua dor, ele, com pena de sua fragilidade, arremessa você para cima"]
    let finais = ["Rignork falhou miseravelmente, quando você tenta trocar por bitcoin, tem sua carteira roubada, ficando sem Draco e sem dinheiro, seu computador também explodiu!", "Você finalmente consegue iniciar a troca de seus Dracos para Bitcoin, porém demorou tanto que a moeda agora vale centavos e o dinheiro restante não dá nem para comprar uma coxinha! Você falhou", "Você finalmente consegue vender suas Dracos, porém, quando vai conferir seu saldo, é exatamente o dinheiro que você gastou! Parabéns, você ficou no 0 a 0", "Por pura sorte, você consegue vender suas moedas um pouco antes dos servidores serem desligados e elas estavam valorizadas, você ganhou algum dinheiro!"]
    console.log("\nRignork é um jovem mago que tinha como objetivo adentrar as catacumbas do Draco e almejar o tão sonhado Cajado Ultra Mega Over Power Mir4 e finalmente se tornar o novo Mestre das Criptomoedas")
    let i = 0
    console.log("\nRignork adentrou ao perigoso mundo dos NFT's e Criptomoedas, logo ao atingir o primeiro nível da catacumba, foi surpreendido por XxJãoPerigosoxX que lhe ofereceu dinheiro infinito e em troca, basta que você entregue seu login e senha para que o dinheiro seja adicionado! Desconfiado de uma proposta tão magnífica, Rignork se encontra em dúvida: \n")
    let pergunta = prompt("Ele deve tentar fugir? ")
    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
    {
        i++
        console.log(`${possibilidades1[0]} Rignork prossegue em sua caminhada rumo a seu objetivo, porém, quando menos espera, se encontra com diversas criaturas com excelentes loots, entretanto, um pouco mais fortes que ele \n`)
        let pergunta = prompt("Você deseja enfrenta-las? ")
        if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
        {         
            i++
            console.log(`\n${possibilidades2[0]} e já começa a sua jornada rumo a infinita mineração de Draco, após vários dias mineirando, ele conseguiu finalmente juntar suas tão sonhadas 100.000 DarkSteel e já foi em busca de comprar mais equipamentos. \n`)
            let pergunta = prompt("Deseja gastar todas as suas DarkSteel em equipamento? ")
            if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
            {
                i++
                console.log(`\n${possibilidades3[0]} e, ao olhar para cima, já consegue ver o brilho do Cajado Ultra Mega Over Power Mir4, entretanto, se depara com um Ogro com 30 níveis acima do seu.\n`)
                let pergunta = prompt("Você deseja fugir dessa batalha? ")
                if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                {
                    i++
                    console.log(`\n${possibilidades4[0]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                        else 
                        {
                            console.log("Parabéns, você quebrou a economia do jogo e faliu a empresa gerando milhões de prejuízo enquanto iria em busca de sua mais nova aventura para falência: Axie Infinity!")
                        }
                    }
                }
                else
                {
                    console.log(`\n${possibilidades4[1]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
            }
            else
            {
                console.log(`\n${possibilidades3[1]} e, ao olhar para cima, já consegue ver o brilho do Cajado Ultra Mega Over Power Mir4, entretanto, se depara com um Ogro com 30 níveis acima do seu.\n`)
                let pergunta = prompt("Você deseja fugir dessa batalha? ")
                if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                {
                    i++
                    console.log(`\n${possibilidades4[0]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
                else
                {
                    console.log(`\n${possibilidades4[1]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
            }
        }
        else
        {
            console.log(`\n${possibilidades2[1]} e já começa a sua jornada rumo a infinita mineração de Draco, após vários dias mineirando, ele conseguiu finalmente juntar suas tão sonhadas 100.000 DarkSteel e já foi em busca de comprar mais equipamentos.\n`)
            let pergunta = prompt("Deseja gastar todas as suas DarkSteel em equipamento? ")
            if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
            {
                i++
                console.log(`\n${possibilidades3[0]} e, ao olhar para cima, já consegue ver o brilho do Cajado Ultra Mega Over Power Mir4, entretanto, se depara com um Ogro com 30 níveis acima do seu.\n`)
                let pergunta = prompt("Você deseja fugir dessa batalha? ")
                if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                {
                    i++
                    console.log(`\n${possibilidades4[0]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
                else
                {
                    console.log(`\n${possibilidades4[1]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
            }
            else
            {
                console.log(`\n${possibilidades3[1]} e, ao olhar para cima, já consegue ver o brilho do Cajado Ultra Mega Over Power Mir4, entretanto, se depara com um Ogro com 30 níveis acima do seu.\n`)
                let pergunta = prompt("Você deseja fugir dessa batalha? ")
                if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                {
                    i++
                    console.log(`\n${possibilidades4[0]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
                else
                {
                    console.log(`\n${possibilidades4[1]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
            }
        }
    }
    else
    {
        console.log(`${possibilidades1[1]} Rignork prossegue em sua caminhada rumo a seu objetivo, porém, quando menos espera, se encontra com diversas criaturas com excelentes loots, entretanto, um pouco mais fortes que ele\n`)
        let pergunta = prompt("Você deseja enfrenta-las? ")
        if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
        {
            i++
            console.log(`${possibilidades2[0]} e já começa a sua jornada rumo a infinita mineração de Draco, após vários dias mineirando, ele conseguiu finalmente juntar suas tão sonhadas 100.000 DarkSteel e já foi em busca de comprar mais equipamentos.\n`)
            let pergunta = prompt("Deseja gastar todas as suas DarkSteel em equipamento? ")
            if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
            {
                i++
                console.log(`${possibilidades3[0]} e, ao olhar para cima, já consegue ver o brilho do Cajado Ultra Mega Over Power Mir4, entretanto, se depara com um Ogro com 30 níveis acima do seu.`)
                let pergunta = prompt("Você deseja fugir dessa batalha? ")
                if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                {
                    i++
                    console.log(`\n${possibilidades4[0]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
                else
                {
                    console.log(`\n${possibilidades4[1]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
            }
        }
        else
        {
            console.log(`${possibilidades2[1]} e já começa a sua jornada rumo a infinita mineração de Draco, após vários dias mineirando, ele conseguiu finalmente juntar suas tão sonhadas 100.000 DarkSteel e já foi em busca de comprar mais equipamentos.\n`)
            let pergunta = prompt("Deseja gastar todas as suas DarkSteel em equipamento? ")
            if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
            {
                i++
                console.log(`\n${possibilidades3[0]} e, ao olhar para cima, já consegue ver o brilho do Cajado Ultra Mega Over Power Mir4, entretanto, se depara com um Ogro com 30 níveis acima do seu.\n`)
                let pergunta = prompt("Você deseja fugir dessa batalha? ")
                if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                {
                    i++
                    console.log(`\n${possibilidades4[0]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
                else
                {
                    console.log(`\n${possibilidades4[1]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
            }
            else
            {
                console.log(`\n${possibilidades3[1]} e, ao olhar para cima, já consegue ver o brilho do Cajado Ultra Mega Over Power Mir4, entretanto, se depara com um Ogro com 30 níveis acima do seu.\n`)
                let pergunta = prompt("Você deseja fugir dessa batalha? ")
                if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                {
                    i++
                    console.log(`\n${possibilidades4[0]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    {
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
                else
                {
                    console.log(`\n${possibilidades4[1]} você atinge o mais alto pico de toda a região e enfim tem o Cajado Ultra Mega Over Power Mir4 Evolution 5.0 Turbo e com ele, mais de 5.000.000.000 de Dracos como recompensa.\n`)
                    let pergunta = prompt("E agora, deseja trocar por bitcoin? ")
                    if(pergunta == "s" || pergunta == "sim" || pergunta == "S" || pergunta == "SIM" || pergunta == "Sim")
                    {
                        i++
                        if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                    else
                    if(i == 0 )
                        {
                            console.log(`${finais[0]}`)
                        }
                        else if(i == 1 || i == 2)
                        {
                            console.log(`${finais[1]}`)
                        }
                        else if(i == 3)
                        {
                            console.log(`${finais[2]}`)
                        }
                        else if(i == 4)
                        {
                            console.log(`${finais[3]}`)
                        }
                    }
                }
            }
        }
    }
else if (inicio == "n" || inicio == "não" || inicio == "N" || inicio == "NAO" || inicio == "Nao")
{
    console.log("Não queria contar mesmo!")
}
else
{
    console.log("Nem sabia que isso poderia ser uma resposta!")
}