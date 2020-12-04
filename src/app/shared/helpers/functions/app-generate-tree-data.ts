import { Chance } from "chance";
import { Config, names, uniqueNamesGenerator } from "unique-names-generator";
import { v4 as uuidv4 } from "uuid";

export function appGenerateTreeData(): any {
  const chance = new Chance();
  const count = chance.integer({ min: 5, max: 10 });
  const emptyArray = new Array(count).fill(null);

  return emptyArray.map(() => {
    const customConfig: Config = {
      separator: "-",
      length: 1,
      dictionaries: [names]
    };

    const isNested = chance.bool({ likelihood: 15 });

    return {
      id: uuidv4(),
      name: uniqueNamesGenerator(customConfig),
      ...{ children: isNested ? appGenerateTreeData() : [] }
    };
  });
}
