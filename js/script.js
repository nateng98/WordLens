// Get URL parameters to determine panel version
const urlParams = new URLSearchParams(window.location.search);
const panelVersion = urlParams.get('panel') || '1'; // Default to version 1

// French translations for common objects
const translations = {
    "fr": {
        "person": "personne",
        "bicycle": "vélo",
        "car": "voiture",
        "motorcycle": "moto",
        "airplane": "avion",
        "bus": "bus",
        "train": "train",
        "truck": "camion",
        "boat": "bateau",
        "traffic light": "feu de circulation",
        "fire hydrant": "bouche d'incendie",
        "stop sign": "panneau stop",
        "parking meter": "parcmètre",
        "bench": "banc",
        "bird": "oiseau",
        "cat": "chat",
        "dog": "chien",
        "horse": "cheval",
        "sheep": "mouton",
        "cow": "vache",
        "elephant": "éléphant",
        "bear": "ours",
        "zebra": "zèbre",
        "giraffe": "girafe",
        "backpack": "sac à dos",
        "umbrella": "parapluie",
        "handbag": "sac à main",
        "tie": "cravate",
        "suitcase": "valise",
        "frisbee": "frisbee",
        "skis": "skis",
        "snowboard": "snowboard",
        "sports ball": "ballon de sport",
        "kite": "cerf-volant",
        "baseball bat": "batte de baseball",
        "baseball glove": "gant de baseball",
        "skateboard": "skateboard",
        "surfboard": "planche de surf",
        "tennis racket": "raquette de tennis",
        "bottle": "bouteille",
        "wine glass": "verre à vin",
        "cup": "tasse",
        "fork": "fourchette",
        "knife": "couteau",
        "spoon": "cuillère",
        "bowl": "bol",
        "banana": "banane",
        "apple": "pomme",
        "sandwich": "sandwich",
        "orange": "orange",
        "broccoli": "brocoli",
        "carrot": "carotte",
        "hot dog": "hot-dog",
        "pizza": "pizza",
        "donut": "beignet",
        "cake": "gâteau",
        "chair": "chaise",
        "couch": "canapé",
        "potted plant": "plante en pot",
        "bed": "lit",
        "dining table": "table à manger",
        "toilet": "toilettes",
        "tv": "télévision",
        "laptop": "ordinateur portable",
        "mouse": "souris",
        "remote": "télécommande",
        "keyboard": "clavier",
        "cell phone": "téléphone portable",
        "microwave": "micro-ondes",
        "oven": "four",
        "toaster": "grille-pain",
        "sink": "évier",
        "refrigerator": "réfrigérateur",
        "book": "livre",
        "clock": "horloge",
        "vase": "vase",
        "scissors": "ciseaux",
        "teddy bear": "ours en peluche",
        "hair drier": "sèche-cheveux",
        "toothbrush": "brosse à dents",
        "hammer": "marteau"
    }
};

// Function to add synonyms
const addSynonyms = (word) => {
    // Sample synonyms for common objects (in French)
    const synonyms = {
        "person": ["personne", "individu"],
        "car": ["automobile", "véhicule"],
        "chair": ["siège"],
        "apple": ["fruit", "pomme"],
        "book": ["tome", "volume"],
        "bottle": ["flacon", "récipient"],
        "cup": ["tasse", "verre"],
        "dog": ["canin", "animal de compagnie"],
        "cat": ["félin", "animal de compagnie"],
        "laptop": ["ordinateur", "portable"],
        "phone": ["mobile", "portable"],
        "fork": ["ustensile"],
        "knife": ["lame", "couteau de cuisine"],
        "spoon": ["ustensile"],
        "bird": ["volatile", "oiseau de compagnie"],
        "bicycle": ["vélo", "bicyclette"],
        "motorcycle": ["moto", "deux-roues"],
        "truck": ["poids lourd", "camionnette"],
        "boat": ["embarcation", "navire"],
        "train": ["locomotive", "wagon"],
        "airplane": ["avion de ligne", "appareil"],
        "bus": ["autocar", "autobus"],
        "traffic light": ["signalisation", "feu tricolore"],
        "fire hydrant": ["borne", "borne d'incendie"],
        "stop sign": ["panneau de signalisation"],
        "bench": ["banquette", "siège"],
        "elephant": ["pachyderme"],
        "bear": ["plantigrade", "grizzly"],
        "zebra": ["équidé"],
        "giraffe": ["camélopard"],
        "backpack": ["cartable", "sac à dos d'écolier"],
        "umbrella": ["parasol", "parapluie de soleil"],
        "handbag": ["sacoche", "sac"],
        "tie": ["cravate", "nœud"],
        "suitcase": ["valise", "bagage"],
        "frisbee": ["disque", "disque volant"],
        "skis": ["planches"],
        "snowboard": ["planche"],
        "sports ball": ["balle", "ballon de jeu"],
        "kite": ["cerf-volant jouet"],
        "baseball bat": ["batte", "bâton"],
        "baseball glove": ["gant", "mitaine"],
        "skateboard": ["planche à roulettes"],
        "surfboard": ["planche de surf"],
        "tennis racket": ["raquette", "raquette de tennis"],
        "wine glass": ["verre à pied", "calice"],
        "fork": ["couvert"],
        "knife": ["couteau de table", "couvert"],
        "spoon": ["couvert"],
        "bowl": ["bol", "coupelle"],
        "banana": ["fruit jaune"],
        "sandwich": ["casse-croûte", "en-cas"],
        "orange": ["agrume", "fruit"],
        "broccoli": ["légume", "crucifère"],
        "carrot": ["légume", "racine"],
        "hot dog": ["sandwich chaud", "saucisse"],
        "pizza": ["tarte", "galette"],
        "donut": ["beignet", "pâtisserie"],
        "cake": ["dessert", "pâtisserie"],
        "couch": ["canapé", "divan"],
        "potted plant": ["plante d'intérieur", "végétal"],
        "bed": ["literie", "couchette"],
        "dining table": ["table de repas"],
        "toilet": ["sanitaire", "toilette"],
        "tv": ["télé", "écran"],
        "remote": ["télécommande", "contrôleur"],
        "cell phone": ["smartphone", "téléphone mobile"],
        "microwave": ["four à micro-ondes", "appareil électroménager"],
        "oven": ["cuisinière", "four de cuisine"],
        "toaster": ["appareil électroménager"],
        "sink": ["lavabo", "vasque"],
        "refrigerator": ["frigo", "réfrigérateur combiné"],
        "clock": ["horloge murale", "pendule"],
        "vase": ["récipient", "contenant"],
        "scissors": ["ciseaux de couture", "outil de découpe"],
        "teddy bear": ["jouet en peluche", "doudou"],
        "hair dryer": ["sèche-cheveux", "séchoir"],
        "toothbrush": ["brosse dentaire", "accessoire d'hygiène"],
        "keyboard": ["clavier d'ordinateur", "input device", "peripherals"],
        "mouse": ["souris"],
        "hammer": ["maillet", "masse", "martelet", "martel"]
    };
    
    if (synonyms[word] && synonyms[word].length > 0) {
        const synItem = document.createElement('div');
        synItem.className = 'additional-info';
        synItem.innerHTML = `
            <span class="info-title">Synonymes:</span>
            <span class="info-content">${synonyms[word].join(', ')}</span>
        `;
        results.appendChild(synItem);
    }
};

// Function to add an example sentence
const addExampleSentence = (word, translation) => {
    // Sample example sentences
    const examples = {
        "person": ["The person walked into the room.", "La personne est entrée dans la pièce."],
        "car": ["I drive a blue car.", "Je conduis une voiture bleue."],
        "chair": ["Please sit on this chair.", "Veuillez vous asseoir sur cette chaise."],
        "apple": ["I eat an apple every day.", "Je mange une pomme tous les jours."],
        "book": ["She wrote a book about history.", "Elle a écrit un livre sur l'histoire."],
        "bottle": ["The bottle is empty.", "La bouteille est vide."],
        "cup": ["The coffee cup is hot.", "La tasse de café est chaude."],
        "dog": ["My dog likes to play outside.", "Mon chien aime jouer dehors."],
        "cat": ["The cat is sleeping on the sofa.", "Le chat dort sur le canapé."],
        "laptop": ["I work on my laptop every day.", "Je travaille sur mon ordinateur portable tous les jours."],
        "phone": ["I need to charge my phone.", "Je dois charger mon téléphone."],
        "knife": ["Be careful with that knife.", "Sois prudent avec ce couteau."],
        "bird": ["The bird is singing in the tree.", "L'oiseau chante dans l'arbre."],
        "bicycle": ["I ride my bicycle to work.", "Je vais au travail à vélo."],
        "motorcycle": ["The motorcycle is very fast.", "La moto est très rapide."],
        "truck": ["The truck is carrying heavy goods.", "Le camion transporte des marchandises lourdes."],
        "boat": ["We went fishing on a boat.", "Nous sommes allés pêcher sur un bateau."],
        "train": ["The train arrives at 3 o'clock.", "Le train arrive à 3 heures."],
        "airplane": ["The airplane is flying above the clouds.", "L'avion vole au-dessus des nuages."],
        "bus": ["I take the bus to school.", "Je prends le bus pour aller à l'école."],
        "traffic light": ["Stop at the red traffic light.", "Arrêtez-vous au feu rouge."],
        "fire hydrant": ["The fire hydrant is red.", "La bouche d'incendie est rouge."],
        "stop sign": ["You must stop at the stop sign.", "Vous devez vous arrêter au panneau stop."],
        "bench": ["Let's sit on that bench.", "Asseyons-nous sur ce banc."],
        "elephant": ["The elephant has a long trunk.", "L'éléphant a une longue trompe."],
        "bear": ["The bear is eating honey.", "L'ours mange du miel."],
        "zebra": ["The zebra has black and white stripes.", "Le zèbre a des rayures noires et blanches."],
        "giraffe": ["The giraffe has a long neck.", "La girafe a un long cou."],
        "backpack": ["My books are in my backpack.", "Mes livres sont dans mon sac à dos."],
        "umbrella": ["Take an umbrella, it's raining.", "Prends un parapluie, il pleut."],
        "handbag": ["She put her keys in her handbag.", "Elle a mis ses clés dans son sac à main."],
        "tie": ["He wears a tie to work.", "Il porte une cravate au travail."],
        "suitcase": ["Pack your clothes in the suitcase.", "Range tes vêtements dans la valise."],
        "frisbee": ["We played frisbee in the park.", "Nous avons joué au frisbee dans le parc."],
        "skis": ["I love skiing with my new skis.", "J'adore skier avec mes nouveaux skis."],
        "snowboard": ["He does tricks on his snowboard.", "Il fait des figures sur son snowboard."],
        "sports ball": ["The children are playing with a sports ball.", "Les enfants jouent avec un ballon de sport."],
        "kite": ["The kite is flying high in the sky.", "Le cerf-volant vole haut dans le ciel."],
        "baseball bat": ["He hit the ball with the baseball bat.", "Il a frappé la balle avec la batte de baseball."],
        "baseball glove": ["Catch the ball with your baseball glove.", "Attrape la balle avec ton gant de baseball."],
        "skateboard": ["He can do tricks on a skateboard.", "Il peut faire des figures sur un skateboard."],
        "surfboard": ["She rides the waves on her surfboard.", "Elle surfe les vagues sur sa planche de surf."],
        "tennis racket": ["She plays tennis with her new tennis racket.", "Elle joue au tennis avec sa nouvelle raquette de tennis."],
        "wine glass": ["Pour the wine into the wine glass.", "Versez le vin dans le verre à vin."],
        "fork": ["Eat your pasta with a fork.", "Mange tes pâtes avec une fourchette."],
        "spoon": ["Stir your tea with a spoon.", "Remue ton thé avec une cuillère."],
        "bowl": ["The soup is in the bowl.", "La soupe est dans le bol."],
        "banana": ["Monkeys like to eat bananas.", "Les singes aiment manger des bananes."],
        "sandwich": ["I made a cheese sandwich for lunch.", "J'ai fait un sandwich au fromage pour le déjeuner."],
        "orange": ["The orange is sweet and juicy.", "L'orange est sucrée et juteuse."],
        "broccoli": ["Children often don't like broccoli.", "Les enfants n'aiment souvent pas le brocoli."],
        "carrot": ["Rabbits love to eat carrots.", "Les lapins adorent manger des carottes."],
        "hot dog": ["We ate hot dogs at the baseball game.", "Nous avons mangé des hot-dogs au match de baseball."],
        "pizza": ["Let's order a pizza for dinner.", "Commandons une pizza pour le dîner."],
        "donut": ["I had a donut with my coffee.", "J'ai pris un beignet avec mon café."],
        "cake": ["We ate cake on his birthday.", "Nous avons mangé du gâteau pour son anniversaire."],
        "couch": ["The cat is sleeping on the couch.", "Le chat dort sur le canapé."],
        "potted plant": ["The potted plant needs water.", "La plante en pot a besoin d'eau."],
        "bed": ["I sleep in my bed every night.", "Je dors dans mon lit chaque nuit."],
        "dining table": ["We eat dinner at the dining table.", "Nous dînons à la table à manger."],
        "toilet": ["The toilet is in the bathroom.", "Les toilettes sont dans la salle de bain."],
        "tv": ["We watched a movie on TV.", "Nous avons regardé un film à la télévision."],
        "remote": ["Where is the TV remote?", "Où est la télécommande de la télé?"],
        "cell phone": ["I always carry my cell phone.", "J'ai toujours mon téléphone portable sur moi."],
        "microwave": ["Heat the food in the microwave.", "Chauffez la nourriture dans le micro-ondes."],
        "oven": ["Bake the cake in the oven.", "Faites cuire le gâteau dans le four."],
        "toaster": ["Make toast in the toaster.", "Fais griller le pain dans le grille-pain."],
        "sink": ["Wash your hands in the sink.", "Lave-toi les mains dans l'évier."],
        "refrigerator": ["Keep the milk in the refrigerator.", "Garde le lait dans le réfrigérateur."],
        "clock": ["The clock shows 3 o'clock.", "L'horloge indique 3 heures."],
        "vase": ["Put the flowers in the vase.", "Mets les fleurs dans le vase."],
        "scissors": ["Cut the paper with scissors.", "Coupe le papier avec des ciseaux."],
        "teddy bear": ["The child sleeps with a teddy bear.", "L'enfant dort avec un ours en peluche."],
        "hair dryer": ["Dry your hair with the hair dryer.", "Sèche tes cheveux avec le sèche-cheveux."],
        "toothbrush": ["Brush your teeth with a toothbrush.", "Brosse-toi les dents avec une brosse à dents."],
        "keyboard": ["The keyboard is wireless.", "Le clavier est sans fil."],
        "mouse": ["The mouse isn't working properly.", "La souris ne fonctionne pas correctement."],
        "hammer": ["The hammer is too heavy for this delicate work.", "Le marteau est trop lourd pour ce travail délicat."]
    };
    
    if (examples[word]) {
        const exampleItem = document.createElement('div');
        exampleItem.className = 'additional-info';
        exampleItem.innerHTML = `
            <span class="info-title">Example:</span>
            <div class="example-container">
                <p class="english-example">${examples[word][0]}</p>
                <p class="french-example">${examples[word][1]}</p>
            </div>
        `;
        results.appendChild(exampleItem);
    }
};

// Function to add a second example sentence
const addAdditionalExampleSentence = (word, translation) => {
    // Sample additional example sentences
    const examples = {
        "person": ["That person is my friend.", "Cette personne est mon ami."],
        "car": ["The car is parked outside.", "La voiture est garée dehors."],
        "chair": ["The chair is broken.", "La chaise est cassée."],
        "apple": ["This apple is sweet.", "Cette pomme est sucrée."],
        "book": ["I read a book last night.", "J'ai lu un livre hier soir."],
        "bottle": ["Please pass me that bottle.", "Passe-moi cette bouteille, s'il te plaît."],
        "cup": ["I need a cup of water.", "J'ai besoin d'une tasse d'eau."],
        "dog": ["The dog is barking at the mailman.", "Le chien aboie après le facteur."],
        "cat": ["My cat likes to play with yarn.", "Mon chat aime jouer avec du fil."],
        "laptop": ["My laptop battery is low.", "La batterie de mon ordinateur portable est faible."],
        "phone": ["I lost my phone yesterday.", "J'ai perdu mon téléphone hier."],
        "knife": ["The knife is very sharp.", "Le couteau est très tranchant."],
        "bird": ["The bird built a nest in our garden.", "L'oiseau a construit un nid dans notre jardin."],
        "bicycle": ["My bicycle has a flat tire.", "Mon vélo a un pneu crevé."],
        "motorcycle": ["He bought a new motorcycle.", "Il a acheté une nouvelle moto."],
        "truck": ["The truck is delivering packages.", "Le camion livre des colis."],
        "boat": ["The boat is sailing on the lake.", "Le bateau navigue sur le lac."],
        "train": ["We missed the last train.", "Nous avons raté le dernier train."],
        "airplane": ["Our airplane was delayed.", "Notre avion a été retardé."],
        "bus": ["The bus is running late today.", "Le bus est en retard aujourd'hui."],
        "traffic light": ["The traffic light turned green.", "Le feu de circulation est passé au vert."],
        "fire hydrant": ["The firefighters connected the hose to the fire hydrant.", "Les pompiers ont connecté le tuyau à la bouche d'incendie."],
        "stop sign": ["There's a stop sign at the corner.", "Il y a un panneau stop au coin de la rue."],
        "bench": ["The old man sat on the bench.", "Le vieil homme s'est assis sur le banc."],
        "elephant": ["The elephant sprayed water with its trunk.", "L'éléphant a pulvérisé de l'eau avec sa trompe."],
        "bear": ["We saw a bear in the forest.", "Nous avons vu un ours dans la forêt."],
        "zebra": ["The zebra is running across the savanna.", "Le zèbre court à travers la savane."],
        "giraffe": ["The giraffe is eating leaves from tall trees.", "La girafe mange des feuilles des grands arbres."],
        "backpack": ["My backpack is too heavy.", "Mon sac à dos est trop lourd."],
        "umbrella": ["I forgot my umbrella and got wet.", "J'ai oublié mon parapluie et je me suis mouillé."],
        "handbag": ["Her handbag matches her shoes.", "Son sac à main est assorti à ses chaussures."],
        "tie": ["His tie is blue with white stripes.", "Sa cravate est bleue avec des rayures blanches."],
        "suitcase": ["My suitcase is missing.", "Ma valise a disparu."],
        "frisbee": ["The dog caught the frisbee.", "Le chien a attrapé le frisbee."],
        "skis": ["He waxed his skis before the race.", "Il a ciré ses skis avant la course."],
        "snowboard": ["She fell while learning to snowboard.", "Elle est tombée en apprenant à faire du snowboard."],
        "sports ball": ["The sports ball bounced over the fence.", "Le ballon de sport a rebondi par-dessus la clôture."],
        "kite": ["The wind carried away our kite.", "Le vent a emporté notre cerf-volant."],
        "baseball bat": ["The baseball bat is made of wood.", "La batte de baseball est faite de bois."],
        "baseball glove": ["He caught the ball with his baseball glove.", "Il a attrapé la balle avec son gant de baseball."],
        "skateboard": ["The skateboard has colorful wheels.", "Le skateboard a des roues colorées."],
        "surfboard": ["The surfboard is waxed and ready.", "La planche de surf est cirée et prête."],
        "tennis racket": ["My tennis racket has a broken string.", "Ma raquette de tennis a une corde cassée."],
        "wine glass": ["She accidentally broke the wine glass.", "Elle a accidentellement cassé le verre à vin."],
        "fork": ["Pass me that fork, please.", "Passe-moi cette fourchette, s'il te plaît."],
        "spoon": ["I need a spoon for my soup.", "J'ai besoin d'une cuillère pour ma soupe."],
        "bowl": ["The bowl is full of cereal.", "Le bol est plein de céréales."],
        "banana": ["The banana is not ripe yet.", "La banane n'est pas encore mûre."],
        "sandwich": ["I packed a sandwich for lunch.", "J'ai préparé un sandwich pour le déjeuner."],
        "orange": ["Peel the orange before eating it.", "Épluche l'orange avant de la manger."],
        "broccoli": ["Steam the broccoli for five minutes.", "Fais cuire le brocoli à la vapeur pendant cinq minutes."],
        "carrot": ["The carrot is crunchy and sweet.", "La carotte est croquante et sucrée."],
        "hot dog": ["Add mustard to your hot dog.", "Ajoute de la moutarde à ton hot-dog."],
        "pizza": ["The pizza has extra cheese.", "La pizza a du fromage supplémentaire."],
        "donut": ["The donut is covered with chocolate.", "Le beignet est recouvert de chocolat."],
        "cake": ["The cake has three layers.", "Le gâteau a trois couches."],
        "couch": ["We need a new couch for the living room.", "Nous avons besoin d'un nouveau canapé pour le salon."],
        "potted plant": ["Water the potted plant twice a week.", "Arrosez la plante en pot deux fois par semaine."],
        "bed": ["Make your bed every morning.", "Fais ton lit tous les matins."],
        "dining table": ["Set the dining table for dinner.", "Mets la table à manger pour le dîner."],
        "toilet": ["The toilet needs to be cleaned.", "Les toilettes doivent être nettoyées."],
        "tv": ["The TV remote is missing.", "La télécommande de la télé a disparu."],
        "remote": ["The remote needs new batteries.", "La télécommande a besoin de nouvelles piles."],
        "cell phone": ["My cell phone is ringing.", "Mon téléphone portable sonne."],
        "microwave": ["Clean the microwave after use.", "Nettoyez le micro-ondes après utilisation."],
        "oven": ["Preheat the oven to 350 degrees.", "Préchauffez le four à 350 degrés."],
        "toaster": ["The toaster is broken.", "Le grille-pain est cassé."],
        "sink": ["The sink is full of dirty dishes.", "L'évier est plein de vaisselle sale."],
        "refrigerator": ["There's nothing to eat in the refrigerator.", "Il n'y a rien à manger dans le réfrigérateur."],
        "clock": ["The clock is five minutes fast.", "L'horloge avance de cinq minutes."],
        "vase": ["The vase is hand-painted.", "Le vase est peint à la main."],
        "scissors": ["The scissors are very sharp.", "Les ciseaux sont très tranchants."],
        "teddy bear": ["The teddy bear has one eye missing.", "L'ours en peluche a un œil manquant."],
        "hair dryer": ["The hair dryer is too noisy.", "Le sèche-cheveux est trop bruyant."],
        "toothbrush": ["Replace your toothbrush every three months.", "Remplacez votre brosse à dents tous les trois mois."],
        "keyboard": ["I type my essays on the keyboard.", "Je tape mes essais sur le clavier."],
        "mouse": ["I need a wireless mouse for my laptop.", "J'ai besoin d'une souris sans fil pour mon ordinateur portable."],
        "hammer": ["He used a hammer to drive the nail into the wall.", "Il a utilisé un marteau pour enfoncer le clou dans le mur."]
    };
    
    if (examples[word]) {
        const exampleItem = document.createElement('div');
        exampleItem.className = 'additional-info';
        exampleItem.innerHTML = `
            <span class="info-title">Another example:</span>
            <div class="example-container">
                <p class="english-example">${examples[word][0]}</p>
                <p class="french-example">${examples[word][1]}</p>
            </div>
        `;
        results.appendChild(exampleItem);
    }
};

// Function to add related words
const addRelatedWords = (word) => {
    // Sample related words
    const relatedWords = {
        "person": [["man", "homme"], ["woman", "femme"], ["child", "enfant"]],
        "car": [["truck", "camion"], ["motorcycle", "moto"], ["bus", "bus"]],
        "chair": [["table", "table"], ["sofa", "canapé"], ["desk", "bureau"]],
        "apple": [["orange", "orange"], ["banana", "banane"], ["pear", "poire"]],
        "book": [["magazine", "magazine"], ["newspaper", "journal"], ["journal", "journal intime"]],
        "bottle": [["glass", "verre"], ["cup", "tasse"], ["container", "récipient"]],
        "cup": [["mug", "tasse"], ["glass", "verre"], ["teacup", "tasse à thé"]],
        "dog": [["cat", "chat"], ["pet", "animal de compagnie"], ["puppy", "chiot"]],
        "cat": [["dog", "chien"], ["kitten", "chaton"], ["pet", "animal de compagnie"]],
        "laptop": [["computer", "ordinateur"], ["tablet", "tablette"], ["keyboard", "clavier"]],
        "phone": [["smartphone", "smartphone"], ["telephone", "téléphone"], ["device", "appareil"]],
        "knife": [["fork", "fourchette"], ["spoon", "cuillère"], ["utensil", "ustensile"]],
        "bird": [["eagle", "aigle"], ["sparrow", "moineau"], ["parrot", "perroquet"]],
        "bicycle": [["motorcycle", "moto"], ["scooter", "trottinette"], ["vehicle", "véhicule"]],
        "motorcycle": [["car", "voiture"], ["bicycle", "vélo"], ["scooter", "scooter"]],
        "truck": [["car", "voiture"], ["van", "camionnette"], ["vehicle", "véhicule"]],
        "boat": [["ship", "navire"], ["yacht", "yacht"], ["canoe", "canoë"]],
        "train": [["subway", "métro"], ["tram", "tramway"], ["bus", "bus"]],
        "airplane": [["helicopter", "hélicoptère"], ["jet", "jet"], ["glider", "planeur"]],
        "bus": [["train", "train"], ["taxi", "taxi"], ["car", "voiture"]],
        "traffic light": [["stop sign", "panneau stop"], ["crosswalk", "passage piéton"], ["sign", "panneau"]],
        "fire hydrant": [["water", "eau"], ["hose", "tuyau"], ["fire truck", "camion de pompiers"]],
        "stop sign": [["yield sign", "panneau cédez le passage"], ["traffic light", "feu de circulation"], ["road sign", "panneau routier"]],
        "bench": [["chair", "chaise"], ["seat", "siège"], ["park", "parc"]],
        "elephant": [["giraffe", "girafe"], ["zebra", "zèbre"], ["lion", "lion"]],
        "bear": [["wolf", "loup"], ["fox", "renard"], ["deer", "cerf"]],
        "zebra": [["horse", "cheval"], ["giraffe", "girafe"], ["elephant", "éléphant"]],
        "giraffe": [["zebra", "zèbre"], ["elephant", "éléphant"], ["antelope", "antilope"]],
        "backpack": [["bag", "sac"], ["purse", "sac à main"], ["luggage", "bagage"]],
        "umbrella": [["raincoat", "imperméable"], ["hat", "chapeau"], ["rain", "pluie"]],
        "handbag": [["purse", "porte-monnaie"], ["wallet", "portefeuille"], ["backpack", "sac à dos"]],
        "tie": [["shirt", "chemise"], ["suit", "costume"], ["bow tie", "nœud papillon"]],
        "suitcase": [["bag", "sac"], ["luggage", "bagage"], ["backpack", "sac à dos"]],
        "frisbee": [["ball", "balle"], ["disc", "disque"], ["toy", "jouet"]],
        "skis": [["snowboard", "snowboard"], ["poles", "bâtons"], ["snow", "neige"]],
        "snowboard": [["skis", "skis"], ["snow", "neige"], ["winter", "hiver"]],
        "sports ball": [["basketball", "basket-ball"], ["soccer ball", "ballon de football"], ["tennis ball", "balle de tennis"]],
        "kite": [["balloon", "ballon"], ["flag", "drapeau"], ["wind", "vent"]],
        "baseball bat": [["baseball", "baseball"], ["ball", "balle"], ["glove", "gant"]],
        "baseball glove": [["baseball bat", "batte de baseball"], ["ball", "balle"], ["mitt", "mitaine"]],
        "skateboard": [["scooter", "trottinette"], ["bicycle", "vélo"], ["rollerblades", "rollers"]],
        "surfboard": [["wetsuit", "combinaison"], ["wave", "vague"], ["beach", "plage"]],
        "tennis racket": [["tennis ball", "balle de tennis"], ["net", "filet"], ["court", "court"]],
        "wine glass": [["cup", "tasse"], ["bottle", "bouteille"], ["glass", "verre"]],
        "fork": [["knife", "couteau"], ["spoon", "cuillère"], ["plate", "assiette"]],
        "spoon": [["fork", "fourchette"], ["knife", "couteau"], ["bowl", "bol"]],
        "bowl": [["plate", "assiette"], ["cup", "tasse"], ["dish", "plat"]],
        "banana": [["apple", "pomme"], ["orange", "orange"], ["fruit", "fruit"]],
        "sandwich": [["bread", "pain"], ["hamburger", "hamburger"], ["meal", "repas"]],
        "orange": [["apple", "pomme"], ["banana", "banane"], ["lemon", "citron"]],
        "broccoli": [["carrot", "carotte"], ["vegetable", "légume"], ["cauliflower", "chou-fleur"]],
        "carrot": [["broccoli", "brocoli"], ["vegetable", "légume"], ["potato", "pomme de terre"]],
        "hot dog": [["hamburger", "hamburger"], ["sandwich", "sandwich"], ["sausage", "saucisse"]],
        "pizza": [["pasta", "pâtes"], ["bread", "pain"], ["cheese", "fromage"]],
        "donut": [["cake", "gâteau"], ["pastry", "pâtisserie"], ["cookie", "biscuit"]],
        "cake": [["pie", "tarte"], ["pastry", "pâtisserie"], ["dessert", "dessert"]],
        "couch": [["chair", "chaise"], ["sofa", "canapé"], ["furniture", "meuble"]],
        "potted plant": [["flower", "fleur"], ["tree", "arbre"], ["garden", "jardin"]],
        "bed": [["pillow", "oreiller"], ["blanket", "couverture"], ["mattress", "matelas"]],
        "dining table": [["chair", "chaise"], ["desk", "bureau"], ["furniture", "meuble"]],
        "toilet": [["sink", "évier"], ["bathtub", "baignoire"], ["bathroom", "salle de bain"]],
        "tv": [["monitor", "moniteur"], ["screen", "écran"], ["computer", "ordinateur"]],
        "remote": [["controller", "contrôleur"], ["tv", "télévision"], ["device", "appareil"]],
        "cell phone": [["smartphone", "smartphone"], ["device", "appareil"], ["computer", "ordinateur"]],
        "microwave": [["oven", "four"], ["appliance", "appareil"], ["kitchen", "cuisine"]],
        "oven": [["stove", "cuisinière"], ["microwave", "micro-ondes"], ["appliance", "appareil"]],
        "toaster": [["appliance", "appareil"], ["bread", "pain"], ["kitchen", "cuisine"]],
        "sink": [["faucet", "robinet"], ["basin", "bassin"], ["water", "eau"]],
        "refrigerator": [["freezer", "congélateur"], ["appliance", "appareil"], ["kitchen", "cuisine"]],
        "clock": [["watch", "montre"], ["time", "temps"], ["alarm", "alarme"]],
        "vase": [["flower", "fleur"], ["pot", "pot"], ["decoration", "décoration"]],
        "scissors": [["knife", "couteau"], ["tool", "outil"], ["blade", "lame"]],
        "teddy bear": [["toy", "jouet"], ["doll", "poupée"], ["stuffed animal", "animal en peluche"]],
        "hair dryer": [["brush", "brosse"], ["appliance", "appareil"], ["bathroom", "salle de bain"]],
        "toothbrush": [["toothpaste", "dentifrice"], ["floss", "fil dentaire"], ["bathroom", "salle de bain"]],
        "keyboard": [["computer", "ordinateur"], ["mouse", "souris"], ["screen", "écran"], ["laptop", "ordinateur portable"], ["typing", "taper"]],
        "mouse": [["keyboard", "clavier"], ["trackpad", "pavé tactile"], ["computer", "ordinateur"]],
        "hammer": [["nail", "clou"], ["screwdriver", "tournevis"], ["tool", "outil"]]
    };
    
    if (relatedWords[word]) {
        const relatedItem = document.createElement('div');
        relatedItem.className = 'additional-info';
        relatedItem.innerHTML = `
            <span class="info-title">Related words:</span>
            <div class="related-words-container">
                ${relatedWords[word].map(pair => 
                    `<div class="related-word">
                        <span class="english">${pair[0]}</span>
                        <span class="translated">${pair[1]}</span>
                    </div>`
                ).join('')}
            </div>
        `;
        results.appendChild(relatedItem);
    }
};
const video = document.getElementById('webcam');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const captureBtn = document.getElementById('capture-btn');
const galleryBtn = document.getElementById('gallery-btn');
const menuBtn = document.getElementById('menu-btn');
const resultContainer = document.getElementById('result-container');
const results = document.getElementById('results');
const closeResultsBtn = document.getElementById('close-results-btn');
const languageSelector = document.getElementById('language-selector');
const statusMessage = document.getElementById('status-message');
const versionIndicator = document.getElementById('versionIndicator');

let model;
let stream;
let usingSampleImage = false;
let currentLanguage = 'fr';
let isProcessing = false;
let detections = [];

// Variables for continuous detection
let isModelReady = false;
let isDetecting = false;
let detectionInterval;

// Track clickable areas
let clickableAreas = [];

// Function to show status message
const showStatus = (message, duration = 3000) => {
    statusMessage.textContent = message;
    statusMessage.style.display = 'block';
    
    if (duration > 0) {
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, duration);
    }
};

// Load the COCO-SSD model
const loadModel = async () => {
    showStatus('Loading object recognition model...', 0);
    try {
        model = await cocoSsd.load();
        isModelReady = true;
        showStatus('Model loaded!', 2000);
        
        // Start continuous detection once model is loaded
        startContinuousDetection();
    } catch (error) {
        console.error('Model loading error:', error);
        showStatus('Error loading model: ' + error.message);
    }
};

// Start the webcam
const startCamera = async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: { 
                facingMode: 'environment'
            },
            audio: false
        });
        video.srcObject = stream;
        
        // Set canvas dimensions after video loads
        video.onloadedmetadata = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
        };
        
        // Load the model after camera is ready
        await loadModel();
        
    } catch (error) {
        console.error('Camera error:', error);
        if (error.name === 'NotAllowedError') {
            showStatus('Camera access denied. Please allow camera access and reload the page.');
        } else if (error.name === 'NotFoundError') {
            showStatus('No camera found. Please ensure your device has a camera.');
        } else if (error.name === 'NotReadableError') {
            showStatus('Camera already in use by another application.');
        } else if (error.name === 'SecurityError' || error.name === 'PermissionDeniedError') {
            showStatus('Camera access blocked due to security restrictions. This app requires HTTPS for camera access.');
            useSampleImage();
        } else {
            showStatus('Error accessing camera: ' + error.message);
            useSampleImage();
        }
    }
};

// Use a sample image if camera is not available
const useSampleImage = () => {
    usingSampleImage = true;
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/api/placeholder/640/480';
    img.alt = 'Sample image';
    
    img.onload = () => {
        video.style.display = 'none';
        
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        showStatus('Using sample image mode due to camera restrictions', 3000);
        
        // Load model if not already loaded
        if (!model) {
            loadModel();
        }
    };
    
    img.onerror = () => {
        showStatus('Error loading sample image. Please try again.');
    };
};

// Function to draw predictions on canvas with clickable areas
const drawPredictions = (predictions) => {
    // Clear previous clickable areas
    clickableAreas = [];
    
    // Remove previous detection target elements
    document.querySelectorAll('.detection-target').forEach(el => el.remove());
    
    if (predictions.length === 0) return;
    
    predictions.forEach(prediction => {
        const { class: objectName, score, bbox } = prediction;
        
        // Only show predictions with confidence over 40%
        if (score < 0.4) return;
        
        const confidence = Math.round(score * 100);
        const translatedName = translations[currentLanguage][objectName] || objectName;
        
        // Draw bounding box
        ctx.strokeStyle = '#3498db';
        ctx.lineWidth = 3;
        ctx.strokeRect(...bbox);
        
        // Add label
        ctx.fillStyle = 'rgba(52, 152, 219, 0.8)';
        ctx.fillRect(bbox[0], bbox[1] - 30, Math.min(160, bbox[2]), 30);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText(`${translatedName}: ${objectName} (${confidence}%)`, bbox[0] + 5, bbox[1] - 10);
        
        // Store clickable area info
        clickableAreas.push({
            x: bbox[0],
            y: bbox[1],
            width: bbox[2],
            height: bbox[3],
            objectName,
            translatedName,
            confidence
        });
        
        // Create an invisible clickable div over the detection
        const detectionTarget = document.createElement('div');
        detectionTarget.className = 'detection-target';
        detectionTarget.style.left = `${bbox[0]}px`;
        detectionTarget.style.top = `${bbox[1]}px`;
        detectionTarget.style.width = `${bbox[2]}px`;
        detectionTarget.style.height = `${bbox[3]}px`;
        detectionTarget.dataset.object = objectName;
        detectionTarget.dataset.translated = translatedName;
        detectionTarget.dataset.confidence = confidence;
        
        // Add click event to show results panel
        detectionTarget.addEventListener('click', (e) => {
            showResultsForObject(objectName, translatedName, confidence);
            e.stopPropagation();
        });
        
        document.querySelector('.camera-container').appendChild(detectionTarget);
    });
};

// Show results panel for a clicked object
const showResultsForObject = (objectName, translatedName, confidence) => {
    // Clear previous results
    results.innerHTML = '';
    
    // Create a base result item with the word and pronunciation button
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';
    resultItem.innerHTML = `
        <div class="word-container">
            <span class="english">${objectName}</span>
            <span class="translated">${translatedName}</span>
        </div>
        <button class="pronunciation-btn" title="Pronunciation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <!-- Speaker base shape -->
                <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                <!-- Sound waves -->
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
        </button>
    `;
    
    // Add click event for pronunciation button
    const pronunciationBtn = resultItem.querySelector('.pronunciation-btn');
    pronunciationBtn.addEventListener('click', () => {
        showStatus('Pronunciation feature coming soon', 2000);
    });
    
    results.appendChild(resultItem);
    
    // Add version-specific content
    switch(panelVersion) {
        case '1':
            // Version 1: Add synonyms
            addSynonyms(objectName);
            break;
            
        case '2':
            // Version 2: Add synonyms and example sentence
            addSynonyms(objectName);
            addExampleSentence(objectName, translatedName);
            break;
            
        case '3':
            // Version 3: Add synonyms, example sentences, and related words
            addSynonyms(objectName);
            addExampleSentence(objectName, translatedName);
            addAdditionalExampleSentence(objectName, translatedName);
            addRelatedWords(objectName);
            break;
            
        default:
            // Default version
            break;
    }
    
    // Show results panel
    resultContainer.style.display = 'flex';
};

// Function for continuous object detection
const startContinuousDetection = () => {
    if (!isModelReady || isDetecting) return;
    
    isDetecting = true;
    
    // Run detection at regular intervals
    detectionInterval = setInterval(async () => {
        if (!model || !video.videoWidth) return;
        
        try {
            // Clear previous drawings
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Get predictions from the model
            const predictions = await model.detect(video);
            
            // Store the detections for later use
            detections = predictions.filter(p => p.score >= 0.4);
            
            // Draw results on canvas
            drawPredictions(predictions);
            
        } catch (error) {
            console.error('Detection error:', error);
            clearInterval(detectionInterval);
            isDetecting = false;
        }
    }, 100); // Run detection approximately 10 times per second
};

// Stop continuous detection
const stopContinuousDetection = () => {
    clearInterval(detectionInterval);
    isDetecting = false;
    
    // Clear canvas
    if (canvas.getContext) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
};

// Function to update results panel with all detected objects
const showAllDetections = () => {
    // Clear previous results
    results.innerHTML = '';
    
    if (detections.length === 0) {
        results.innerHTML = '<div class="loading">No objects detected. Try pointing at something else.</div>';
        return;
    }
    
    // Add all detected objects to results list
    detections.forEach(prediction => {
        const { class: objectName, score } = prediction;
        const confidence = Math.round(score * 100);
        const translatedName = translations[currentLanguage][objectName] || objectName;
        
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <div class="word-container">
                <span class="english">${objectName}</span>
                <span class="translated">${translatedName}</span>
            </div>
            <button class="pronunciation-btn" title="Pronunciation">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <!-- Speaker base shape -->
                    <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                    <!-- Sound waves -->
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                </svg>
            </button>
        `;
        
        // Add click event for pronunciation button
        const pronunciationBtn = resultItem.querySelector('.pronunciation-btn');
        pronunciationBtn.addEventListener('click', () => {
            showStatus('Pronunciation feature coming soon', 2000);
        });
        
        results.appendChild(resultItem);
        
        // Add version-specific content based on panel version
        switch(panelVersion) {
            case '1':
                // Version 1: Add synonyms
                addSynonyms(objectName);
                break;
                
            case '2':
                // Version 2: Add synonyms and example sentence
                addSynonyms(objectName);
                addExampleSentence(objectName, translatedName);
                break;
                
            case '3':
                // Version 3: Add synonyms, example sentences, and related words
                addSynonyms(objectName);
                addExampleSentence(objectName, translatedName);
                addAdditionalExampleSentence(objectName, translatedName);
                addRelatedWords(objectName);
                break;
                
            default:
                // Default version
                break;
        }
    });
    
    // Show results panel
    resultContainer.style.display = 'flex';
};

// Event listeners
canvas.addEventListener('click', (e) => {
    // Calculate click position relative to canvas
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if click is on a detection area
    for (const area of clickableAreas) {
        if (
            x >= area.x && 
            x <= area.x + area.width && 
            y >= area.y && 
            y <= area.y + area.height
        ) {
            showResultsForObject(area.objectName, area.translatedName, area.confidence);
            return;
        }
    }
});

// Capture button - for this version, show the feature coming soon message
captureBtn.addEventListener('click', () => {
    showStatus('Capture feature coming soon', 2000);
});

// Gallery button - show feature coming soon
galleryBtn.addEventListener('click', () => {
    showStatus('Gallery feature coming soon', 2000);
});

// Menu button - show all detections or coming soon message depending on version
menuBtn.addEventListener('click', () => {
    showStatus('Menu feature coming soon', 2000);
});

// Close results button
closeResultsBtn.addEventListener('click', () => {
    resultContainer.style.display = 'none';
});

// Language selector change
languageSelector.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    showStatus(`Language changed to ${e.target.options[e.target.selectedIndex].text}`, 2000);
});

// Handle window resize
window.addEventListener('resize', () => {
    if (video.videoWidth) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, pause detection to save resources
        stopContinuousDetection();
    } else {
        // Page is visible again, resume detection
        startContinuousDetection();
    }
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Update version indicator
    versionIndicator.textContent = `Version ${panelVersion}`;
    
    // Mark the active version link
    document.querySelectorAll('.version-link').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(`v${panelVersion}`).classList.add('active');
    
    // Add version-specific class to body for panel height
    document.body.classList.add(`panel-version-${panelVersion}`);
    
    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        startCamera();
    } else {
        showStatus('Your browser does not support camera access.');
        useSampleImage();
    }
});