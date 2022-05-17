export type Player = {
  name: string,
  isJedi: boolean,
  temple: string
}

export interface PlayerDto {
  name: string;
  isJedi: boolean;
  temple: string;
  // surname : string;
}

// Va exister au final dans le js ---------------------
export class PlayerMetier {
  name !: string;
  isJedi !: boolean;
  //surname! : string;
  temple !: string;

  constructor(name: string, isJedi: boolean, temple: string) {
    console.info('PlayerMetier.constructor()');
  }

  static fromDto(dto: PlayerDto): PlayerMetier {
    return new PlayerMetier(dto.name, dto.isJedi, dto.temple);
  }
}

//------------------
let monPlayer =  new PlayerMetier('Yoda', true, 'Coruscant');
monPlayer = PlayerMetier.fromDto(monPlayer);


const monPlayer2: PlayerMetier = {
  name: 'Yoda',
  isJedi: true,
  temple: 'Coruscant'
}

const unYoda: PlayerDto = {
  name: 'Yoda',
  isJedi: true,
  temple: 'Coruscant'
}


function calculate(item:  {name: string, isJedi: boolean, temple: string}) {
}

calculate(monPlayer2);
calculate(monPlayer);
calculate(unYoda);


// Ne sert qu'à la compilation
type Person = {
  surname: string
};

type Admin = Person & {
  name: string,
  role: string
};

const person: Person = {
  surname: 'Lannister'
};

const admin: Admin = {
  name: '???',
  role: 'Jedi',
  surname: 'Yoda'
};

const validateRole = (person: Person) => {
  console.info(this);
};

validateRole(person);
validateRole(admin);

// Ne sert qu'à la compilation
type AdminNullable = Admin | null | undefined;

type JediType = "Jedi" | "Sith";

const jedi: JediType = "Sith";

const giveRole = (person: AdminNullable) => {
  if (typeof(person) !== 'undefined' && person !== null) {
    validateRole(person);
  }

  if (person) {
    validateRole(person);
  }

  if (!! person) {
    validateRole(person);
  }
}
