import { newEnforcer } from "casbin";
import { join } from "path";
async function init() {
  // model1 test
  const e1 = await newEnforcer(
    join(__dirname, "./model1.conf"),
    join(__dirname, "./policy.csv")
  );
  const result1 = await e1.enforce(
    {
      user: {
        username: "alice",
      },
    },
    "read"
  );
  console.log(result1); //the result is： false

  // model2 test

  const e2 = await newEnforcer(
    join(__dirname, "./model2.conf"),
    join(__dirname, "./policy.csv")
  );
  const result2 = await e2.enforce(
    {
      username: "alice",
    },
    "read"
  );
  console.log(result2); // the result is： true
}
init();
