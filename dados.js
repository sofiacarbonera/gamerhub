let dados = [
    {
        imagem: "./imagens-jogos/god-of-war.avif",
        categoria: "ACAO",
        site: "https://store.steampowered.com/app/1593500/God_of_War/",
        titulo: "God of War",
        descricao: "Assuma o papel de Kratos, um deus grego exilado, em uma jornada épica através dos reinos nórdicos. Lute contra criaturas mitológicas e explore um mundo aberto exuberante enquanto se reconecta com seu filho, Atreus.",
        trailer: "https://www.youtube.com/watch?v=FyIwEFXOcaE",
        review: "https://www.youtube.com/watch?v=x_MtcOznfM4"
    },
    {
        imagem: "./imagens-jogos/sekiro.png",
        categoria: "ACAO",
        site: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/",
        titulo: "Sekiro : Shadows Die Twice",
        descricao: "Mergulhe em um mundo sombrio e desafiador como um shinobi desfigurado em busca de vingança. Domine a arte do combate samurai e enfrente inimigos implacáveis em batalhas intensas.",
        trailer: "https://www.youtube.com/watch?v=rXMX4YJ7Lks",
        review: "https://www.youtube.com/watch?v=Od5A36FudD4"
    },
    {
        imagem: "./imagens-jogos/devil-may-cry.jpeg",
        categoria: "ACAO",
        site: "https://store.steampowered.com/app/601150/Devil_May_Cry_5/",
        titulo: "Devil May Cry 5",
        descricao: "Experimente a ação frenética e estilosa da série Devil May Cry. Controle personagens carismáticos e enfrente demônios poderosos em combates espetaculares, personalizando seu estilo de jogo com combos e habilidades únicas.",
        trailer: "https://www.youtube.com/watch?v=KMSGj9Y2T9Q",
        review: "https://www.youtube.com/watch?v=teMfDQrgQXA"
    },
    {
        imagem: "./imagens-jogos/cs2.avif",
        categoria: "FPS",
        site: "https://store.steampowered.com/app/730/CounterStrike_2/",
        titulo: "Counter-Strike 2",
        descricao: "A evolução do clássico FPS competitivo. Com gráficos aprimorados, física mais realista e jogabilidade refinada, CS2 oferece uma experiência de tiro tática e intensa, com modos de jogo como Desarmamento da Bomba e Resgate de Reféns.",
        trailer: "https://www.youtube.com/watch?v=edYCtaNueQY",
        review: "https://www.youtube.com/watch?v=FYFMfUU5mzA" 
    },
    {
        imagem: "./imagens-jogos/valorant.jpg",
        categoria: "FPS",
        site: "https://playvalorant.com/pt-br/",
        titulo: "Valorant",
        descricao: "Um FPS tático 5v5 com agentes únicos, cada um com habilidades especiais. Combine as habilidades de sua equipe para dominar o mapa e eliminar os adversários. Com rounds curtos e jogadas estratégicas, Valorant oferece uma experiência competitiva e emocionante.",
        trailer: "https://www.youtube.com/watch?v=e_E9W2vsRbQ",
        review: "https://www.youtube.com/watch?v=qKld97rjZD4"
    },
    {
        imagem: "./imagens-jogos/overwatch2.jpg",
        categoria: "FPS",
        site: "https://store.steampowered.com/app/2357570/Overwatch_2/",
        titulo: "Overwatch 2",
        descricao: "Um jogo de tiro em equipe heroico com personagens coloridos e habilidades únicas. Escolha seu herói e trabalhe em equipe para conquistar os objetivos do mapa. Com diversos modos de jogo e um universo rico, Overwatch 2 oferece uma experiência divertida e dinâmica.",
        trailer: "https://www.youtube.com/watch?v=LGgqyer-qr4",
        review: "https://www.youtube.com/watch?v=rs-TN9gXuP0" 
    },
    {
        imagem: "./imagens-jogos/elden-ring.jpg",
        categoria: "RPG",
        site: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
        titulo: "Elden Ring",
        descricao: "Um RPG de mundo aberto épico e desafiador, criado por Hidetaka Miyazaki. Explore um mundo interconectado repleto de perigos e mistérios, lute contra inimigos implacáveis e descubra a verdade sobre o Anel Elden.",
        trailer: "https://www.youtube.com/watch?v=AKXiKBnzpBQ",
        review: "https://www.youtube.com/watch?v=0uav6zQKiMQ"
    },
    {
        imagem: "./imagens-jogos/the-witcher.png",
        categoria: "RPG",
        site: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
        titulo: "The Witcher 3 : Wild Hunt",
        descricao: "Mergulhe no mundo de fantasia medieval de The Witcher e embarque em uma jornada épica como Geralt de Rivia, um caçador de monstros. Explore um mundo aberto vasto e detalhado, complete missões emocionantes e faça escolhas que moldarão o destino do reino.",
        trailer: "https://www.youtube.com/watch?v=1-l29HlKkXU",
        review: "https://www.youtube.com/watch?v=VpevTNRK-_M"
    },
    {
        imagem: "./imagens-jogos/baldur.avif",
        categoria: "RPG",
        site: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
        titulo: "Baldur's Gate 3",
        descricao: "Um RPG tático por turnos baseado no sistema de regras da quinta edição de Dungeons & Dragons. Crie seu personagem, explore um mundo rico e interativo, e enfrente desafios épicos em uma aventura épica. As escolhas que você fizer terão um impacto profundo na história e no destino de seus companheiros.",
        trailer: "https://www.youtube.com/watch?v=OcP0WdH7rTs",
        review: "https://www.youtube.com/watch?v=dIynuCeLOoc"
    },
    {
        imagem: "./imagens-jogos/the-sims.jpg",
        categoria: "SIMULACAO",
        site: "https://store.steampowered.com/app/1222670/The_Sims_4/",
        titulo: "The Sims 4",
        descricao: "Crie Sims únicos, construa casas incríveis e viva a vida que você sempre quis. Explore uma variedade de carreiras, hobbies e relacionamentos. Personalize seus Sims e seus lares com infinitas possibilidades.",
        trailer: "https://www.youtube.com/watch?v=DL2hlOIf-PM",
        review: "https://www.youtube.com/watch?v=ixCdUVlqpEI"
    },
    {
        imagem: "./imagens-jogos/cities.jpg",
        categoria: "SIMULACAO",
        site: "https://store.steampowered.com/app/255710/Cities_Skylines/",
        titulo: "Cities : Skylines",
        descricao: "Construa e gerencie sua própria cidade. Planeje o tráfego, forneça serviços essenciais, zoneie áreas residenciais, comerciais e industriais. Crie uma metrópole próspera e única.",
        trailer: "https://www.youtube.com/watch?v=CpWe03NhXKs",
        review: "https://www.youtube.com/watch?v=9xj4ciP0Riw"
    },
    {
        imagem: "./imagens-jogos/flight-simulator.jpg",
        categoria: "SIMULACAO",
        site: "https://store.steampowered.com/app/1250410/Microsoft_Flight_Simulator_40th_Anniversary_Edition/",
        titulo: "Microsoft Flight Simulator",
        descricao: "Experimente a emoção de voar por todo o mundo com um realismo incrível. Piloe uma variedade de aeronaves, desde pequenos aviões até grandes jatos comerciais. Desfrute de paisagens deslumbrantes e condições climáticas dinâmicas.",
        trailer: "https://www.youtube.com/watch?v=TYqJALPVn0Y",
        review: "https://www.youtube.com/watch?v=ZgQHaLtQiYU"
    },
    {
        imagem: "./imagens-jogos/civilization.webp",
        categoria: "ESTRATEGIA",
        site: "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/",
        titulo: "Civilization VI",
        descricao: "Guie uma civilização desde a antiguidade até a era da informação. Explore novos territórios, desenvolva tecnologias, conquiste inimigos e construa um império que resistirá ao teste do tempo.",
        trailer: "https://www.youtube.com/watch?v=5KdE0p2joJw",
        review: "https://www.youtube.com/watch?v=_lV2r7kORKs"
    },
    {
        imagem: "./imagens-jogos/starcraft.jpg",
        categoria: "ESTRATEGIA",
        site: "https://starcraft2.blizzard.com/pt-br/",
        titulo: "Starcraft II",
        descricao: "Mergulhe em épicos conflitos entre três raças alienígenas: os Terrans, os Protoss e os Zerg. Construa bases, treine exércitos e domine o campo de batalha em intensas batalhas em tempo real.",
        trailer: "https://www.youtube.com/watch?v=MVbeoSPqRs4",
        review: "https://www.youtube.com/watch?v=pLSoBfUvmaQ"
    },
    {
        imagem: "./imagens-jogos/xcom2.webp",
        categoria: "ESTRATEGIA",
        site:"https://store.steampowered.com/app/268500/XCOM_2/",
        titulo: "XCOM 2",
        descricao: "Lide com uma invasão alienígena global. Recrute e treine soldados, desenvolva tecnologias avançadas e planeje missões táticas por turnos para salvar a humanidade. Cada decisão pode significar a vida ou a morte de seus soldados.",
        trailer: "https://www.youtube.com/watch?v=jVf-lCVYI6k",
        review: "https://www.youtube.com/watch?v=OQutCE7dy84"
    },
    {
        imagem: "./imagens-jogos/forza.jpg",
        categoria: "CORRIDA",
        site: "https://store.steampowered.com/app/1551360/Forza_Horizon_5/",
        titulo: "Forza Horizon 5",
        descricao: "Experimente a emoção de dirigir os carros mais icônicos do mundo em um mundo aberto vibrante e detalhado do México. Explore paisagens diversas, participe de corridas alucinantes e personalize seus carros para criar a máquina perfeita.",
        trailer: "https://www.youtube.com/watch?v=FYH9n37B7Yw",
        review: "https://www.youtube.com/watch?v=98wujVDdnNQ"
    },
    {
        imagem: "./imagens-jogos/gran-turismo.avif",
        categoria: "CORRIDA",
        site: "https://www.playstation.com/pt-br/games/gran-turismo-7/",
        titulo: "Gran Turismo 7",
        descricao: "O simulador de corrida definitivo, com uma coleção de carros impressionante e pistas autênticas. Desafie seus amigos em corridas online, participe de campeonatos e construa sua coleção de carros dos sonhos.",
        trailer: "https://www.youtube.com/watch?v=oz-O74SmTSQ",
        review: "https://www.youtube.com/watch?v=6vo5NNjsqDs"
    },
    {
        imagem: "./imagens-jogos/mario-kart.jpg",
        categoria: "CORRIDA",
        site: "https://www.nintendo.com/pt-br/store/products/mario-kart-8-deluxe-switch/?srsltid=AfmBOopBCcNscu2xWA9p3I74m8tZxM9uCHiw24zelunc8-RLZ698CPMA",
        titulo: "Mario Kart 8 Deluxe",
        descricao: "Divirta-se com seus personagens favoritos da Nintendo em corridas frenéticas e cheias de ação. Utilize itens malucos para atrapalhar seus adversários e cruzar a linha de chegada em primeiro lugar.",
        trailer: "https://www.youtube.com/watch?v=tKlRN2YpxRE",
        review: "https://www.youtube.com/watch?v=-o6HeaVNFLE"
    },
    {
        imagem: "./imagens-jogos/stardew-valley.avif",
        categoria: "CASUAL",
        site: "https://store.steampowered.com/app/413150/Stardew_Valley/",
        titulo: "Stardew Valley",
        descricao: "Fuja da vida agitada da cidade e comece uma nova vida em uma fazenda herdada. Cultive plantações, crie animais, explore minas e construa relacionamentos com os moradores da vila. Um jogo relaxante e viciante.",
        trailer: "https://www.youtube.com/watch?v=ot7uXNQskhs&t",
        review: "https://www.youtube.com/watch?v=ddTHeAQhlws"
    },
    {
        imagem: "./imagens-jogos/among-us.jpg",
        categoria: "CASUAL",
        site: "https://store.steampowered.com/app/945360/Among_Us/",
        titulo: "Among Us",
        descricao: "Um jogo de dedução social onde você pode ser um impostor, sabotando a nave e eliminando tripulantes, ou um tripulante, tentando descobrir quem é o impostor antes que seja tarde demais. Diversão garantida com amigos!",
        trailer: "https://www.youtube.com/watch?v=CermGp8bwFE",
        review: "https://www.youtube.com/watch?v=iGEpoEqu2gE"
    },
    {
        imagem: "./imagens-jogos/fall-guys.jpeg",
        categoria: "CASUAL",
        site: "https://store.epicgames.com/pt-BR/p/fall-guys",
        titulo: "Fall Guys : Ultimate Knockout",
        descricao: "Um jogo de party game multiplayer onde até 60 jogadores competem em uma série de mini-games malucos e obstáculos desafiadores para se tornar o último feijãozinho em pé.",
        trailer: "https://www.youtube.com/watch?v=FcITAzKW3fY",
        review: "https://www.youtube.com/watch?v=EELg2YeUdyQ"  
    },
    {
        imagem: "./imagens-jogos/resident-evil.avif",
        categoria: "TERROR",
        site: "https://store.steampowered.com/app/2050650/Resident_Evil_4/",
        titulo: "Resident Evil 4",
        descricao: "Mergulhe em uma vila infestada por criaturas aterrorizantes e lute para sobreviver. Como agente especial Leon S. Kennedy, você precisará usar suas habilidades de tiro e resolução de puzzles para escapar de um culto obscuro e encontrar a filha do presidente dos Estados Unidos.",
        trailer: "https://www.youtube.com/watch?v=9iy6gHDKvzA",
        review: "https://www.youtube.com/watch?v=2zcACo62avY"
    },
    {
        imagem: "./imagens-jogos/amnesia.jpg",
        categoria: "TERROR",
        site: "https://store.steampowered.com/app/57300/Amnesia_The_Dark_Descent/",
        titulo: "Amnesia : The Dark Descent",
        descricao: "Acordando em um castelo antigo sem memória, você precisa explorar os corredores escuros e labirínticos para descobrir o que aconteceu. A sanidade é sua maior inimiga, pois cada terror que você vivencia a corrói. A sobrevivência depende de você manter a calma e evitar a escuridão.",
        trailer: "https://www.youtube.com/watch?v=u1nY_5-UrY4",
        review: "https://www.youtube.com/watch?v=sy17Qk_M_ag"
    },
    {
        imagem: "./imagens-jogos/outlast.jpeg",
        categoria: "TERROR",
        site: "https://store.steampowered.com/app/238320/Outlast/",
        titulo: "Outlast",
        descricao: "Armado apenas com uma câmera de vídeo, você invade um hospital psiquiátrico abandonado e descobre experimentos horríveis. A escuridão é sua única aliada, mas os pacientes mutantes que habitam o local são implacáveis. A sobrevivência depende da furtividade e da resolução de puzzles.",
        trailer: "https://www.youtube.com/watch?v=uKA-IA4locM",
        review: "https://www.youtube.com/watch?v=0l1_jJDZ9Ts" 
    },
    {
        imagem: "./imagens-jogos/hades.avif",
        categoria: "INDIE",
        site: "https://store.steampowered.com/app/1145360/Hades/",
        titulo: "Hades",
        descricao: "Um rogue-lite de ação frenético ambientado no submundo grego. Escolha suas armas e habilidades, enfrente hordas de inimigos mitológicos e escape do domínio de Hades, o deus do submundo. A cada tentativa, você se tornará mais forte e se aproximará da liberdade.",
        trailer: "https://www.youtube.com/watch?v=91t0ha9x0AE",
        review: "https://www.youtube.com/watch?v=NDMXQo_LalQ"
    },
    {
        imagem: "./imagens-jogos/celeste.avif",
        categoria: "INDIE",
        site: "https://store.steampowered.com/app/504230/Celeste/",
        titulo: "Celeste",
        descricao: "Uma plataforma 2D com uma história comovente sobre superação pessoal. Conquiste montanhas desafiadoras, domine mecânicas de movimento precisas e descubra os segredos de Celeste Mountain enquanto Madeline, a protagonista, enfrenta seus medos internos.",
        trailer: "https://www.youtube.com/watch?v=70d9irlxiB4", 
        review: "https://www.youtube.com/watch?v=DQjAPWWgdwM"
    },
    {
        imagem: "./imagens-jogos/hollow-knight.webp",
        categoria: "INDIE",
        site: "https://store.steampowered.com/app/367520/Hollow_Knight/",
        titulo: "Hollow Knight",
        descricao: "Um metroidvania sombrio e atmosférico ambientado em um reino de insetos. Explore um mundo interconectado, derrote chefes épicos, desbloqueie novas habilidades e descubra os segredos do reino de Hallownest. Prepare-se para uma jornada desafiadora e memorável.",
        trailer: "https://www.youtube.com/watch?v=UAO2urG23S4",
        review: "https://www.youtube.com/watch?v=hg25ONutphA&t"
    },
    {
        imagem: "./imagens-jogos/red-dead2.avif",
        categoria: "AVENTURA",
        site: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
        titulo: "Red Dead Redemption 2",
        descricao: "Mergulhe no selvagem oeste americano e viva a vida de um fora da lei. Explore um mundo aberto imenso e detalhado, participe de missões épicas, realize atividades como caça e pesca, e construa relacionamentos com outros personagens. Uma história cativante e um mundo vivo te aguardam.",
        trailer: "https://www.youtube.com/watch?v=gmA6MrX81z4",
        review: "https://www.youtube.com/watch?v=yoFvVAMcwOE"
    },
    {
        imagem: "./imagens-jogos/zelda.png",
        categoria: "AVENTURA",
        site: "https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-breath-of-the-wild-switch/?srsltid=AfmBOoqmsrn8lHATNRibs_Z9reDFtwG6BGrsJB3SletsMb5Lg9Ae4hFP",
        titulo: "The Legend of Zelda : Breath of the Wild",
        descricao: "Acordando de um sono de 100 anos, Link embarca em uma jornada para salvar Hyrule. Explore um mundo aberto vasto e cheio de mistérios, domine as leis da física e utilize diversas ferramentas para superar desafios. Uma aventura épica que redefine a série Zelda.",
        trailer: "https://www.youtube.com/watch?v=zw47_q9wbBE",
        review: "https://www.youtube.com/watch?v=r5S8yTb_QNU"
    },
    {
        imagem: "./imagens-jogos/uncharted.jpg",
        categoria: "AVENTURA",
        site: "https://www.playstation.com/pt-br/games/uncharted-4-a-thiefs-end/",
        titulo: "Uncharted 4 : A Thief's End",
        descricao: "Acompanhe Nathan Drake em sua última aventura como caçador de tesouros. Explore locais exóticos, resolva puzzles intrincados e enfrente perigos em tiroteios intensos. Uma história emocionante e um visual deslumbrante marcam o fim de uma era.",
        trailer: "https://www.youtube.com/watch?v=ezPI0rPKwtE",
        review: "https://www.youtube.com/watch?v=6cXyQg_5uoc"
    }
]