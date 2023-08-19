import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [difficulty, setDifficulty] = useState("Beginner");
  const [update, setUpdate] = useState(0);
  const [combos, setCombos] = useState(true);
  const [trick, setTrick] = useState("AAA");
  const [xs, setXs] = useState(0);

  useEffect(() => {
    const BeginnerTricks = [
      "Straight jump",
      "Tuck jump",
      "Pike jump",
      "Front 3/4",
      "Pullover",
      "360",
      "180",
      "Turntable",
      "Back 180 Back",
      "Cat twist",
      "Dog twist",
    ];
    const AdvancedTricks = [
      "Backflip",
      "Backflip 3/4",
      "Backflip 180",
      "Full",
      "Full 3/4",
      "Cody",
      "Pullover",
      "Kaboom",
      "Kaboom full",
      "Kaboom arabian",
      "Frontflip",
      "Frontflip 180",
      "Arabian",
      "Frontflip full",
      "Frontflip 3/4",
      "Zack",
      "Ballout",
      "Sideflip",
      "Sideflip 180",
      "Cat twist",
      "Dog twist",
    ];
    const ExpertTricks = [
      "Dub cat twist",
      "Dub dog twist",
      "Double backflip",
      "Double backflip 7/8",
      "Half-in",
      "Double full",
      "Double cody",
      "Cody full",
      "Double pullover",
      "Double kaboom",
      "Kaboom double full",
      "Pullover full",
      "Ballout 180",
      "Ballout full",
      "Kaboom double arabian",
      "Double frontflip",
      "Suicide",
      "Double arabian",
      "Rudy",
      "Frontflip double full",
      "Double ballout",
      "Double sideflip",
      "Sideflip full",
    ];
    const MasterTricks = [
      "Triple cat twist",
      "Half-in full-out",
      "Triple kaboom",
      "Kaboom triple full",
      "Fliffus",
      "Randy",
      "Full-in",
      "Full-in half-out",
      "Front full-in",
      "Front full-in half-out",
      "Ballout rudy",
      "Pullover double full",
      "Double backflip stall-in",
      "Double backflip stall-out",
      "Tripple full",
      "Double zack",
      "Double layout backflip",
      "Double layout frontflip",
    ];
    const InsaneTricks = [
      "Triple dog twist",
      "Quad cat twist",
      "Tripple backflip",
      "Cody double full",
      "Tripple frontflip",
      "Half-in double back-out",
      "Rudy-in",
      "Rudy-out",
      "Randy-in",
      "Randy-out",
      "Quad backflip",
      "Tripple arabian",
      "Quad frontflip",
      "Quad full",
      "Tripple Backflip stall-in",
      "Tripple ballout",
      "Tripple cody",
      "Tripple zack",
      "Adolf",
    ];

    const randomNumber = Math.random();
    let comboLength;
    if (randomNumber < 0.5) {
      // 50% chance for 2
      comboLength = 2;
    } else if (randomNumber < 0.8) {
      // 30% chance for 1
      comboLength = 1;
    } else {
      // 20% chance for 3
      comboLength = 3;
    }

    if (!combos || comboLength === 1) {
      if (difficulty === "Beginner") {
        setTrick(
          BeginnerTricks[Math.floor(Math.random() * BeginnerTricks.length)]
        );
      } else if (difficulty === "Advanced") {
        setTrick(
          AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)]
        );
      } else if (difficulty === "Expert") {
        setTrick(ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)]);
      } else if (difficulty === "Master") {
        setTrick(MasterTricks[Math.floor(Math.random() * MasterTricks.length)]);
      } else if (difficulty === "Insane") {
        setTrick(InsaneTricks[Math.floor(Math.random() * InsaneTricks.length)]);
      }
    } else if (comboLength === 2) {
      if (difficulty === "Beginner") {
        setTrick(
          BeginnerTricks[Math.floor(Math.random() * BeginnerTricks.length)] +
            " x " +
            BeginnerTricks[Math.floor(Math.random() * BeginnerTricks.length)]
        );
      } else if (difficulty === "Advanced") {
        setTrick(
          AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)] +
            " x " +
            AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)]
        );
      } else if (difficulty === "Expert") {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        const randomTrick =
          randomNumber === 1
            ? AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)]
            : ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)];
        setTrick(
          ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)] +
            " x " +
            randomTrick
        );
      } else if (difficulty === "Master") {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        const randomTrick =
          randomNumber === 1
            ? AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)]
            : randomNumber === 2
            ? ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)]
            : MasterTricks[Math.floor(Math.random() * MasterTricks.length)];
        setTrick(
          MasterTricks[Math.floor(Math.random() * MasterTricks.length)] +
            " x " +
            randomTrick
        );
      } else if (difficulty === "Insane") {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        const randomTrick =
          randomNumber === 1
            ? ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)]
            : randomNumber === 2
            ? MasterTricks[Math.floor(Math.random() * MasterTricks.length)]
            : InsaneTricks[Math.floor(Math.random() * InsaneTricks.length)];
        setTrick(
          InsaneTricks[Math.floor(Math.random() * InsaneTricks.length)] +
            " x " +
            randomTrick
        );
      }
    } else if (comboLength === 3) {
      if (difficulty === "Beginner") {
        setTrick(
          BeginnerTricks[Math.floor(Math.random() * BeginnerTricks.length)] +
            " x " +
            BeginnerTricks[Math.floor(Math.random() * BeginnerTricks.length)] +
            " x " +
            BeginnerTricks[Math.floor(Math.random() * BeginnerTricks.length)]
        );
      } else if (difficulty === "Advanced") {
        setTrick(
          AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)] +
            " x " +
            AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)] +
            " x " +
            AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)]
        );
      } else if (difficulty === "Expert") {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        const randomTrick =
          randomNumber === 1
            ? AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)]
            : ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)];
        const randomNumber2 = Math.floor(Math.random() * 2) + 1;
        const randomTrick2 =
          randomNumber2 === 1
            ? AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)]
            : ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)];
        setTrick(
          ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)] +
            " x " +
            randomTrick +
            " x " +
            randomTrick2
        );
      } else if (difficulty === "Master") {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        const randomTrick =
          randomNumber === 1
            ? AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)]
            : randomNumber === 2
            ? ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)]
            : MasterTricks[Math.floor(Math.random() * MasterTricks.length)];
        const randomNumber2 = Math.floor(Math.random() * 3) + 1;
        const randomTrick2 =
          randomNumber2 === 1
            ? AdvancedTricks[Math.floor(Math.random() * AdvancedTricks.length)]
            : randomNumber2 === 2
            ? ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)]
            : MasterTricks[Math.floor(Math.random() * MasterTricks.length)];
        setTrick(
          MasterTricks[Math.floor(Math.random() * MasterTricks.length)] +
            " x " +
            randomTrick +
            " x " +
            randomTrick2
        );
      } else if (difficulty === "Insane") {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        const randomTrick =
          randomNumber === 1
            ? ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)]
            : randomNumber === 2
            ? MasterTricks[Math.floor(Math.random() * MasterTricks.length)]
            : InsaneTricks[Math.floor(Math.random() * InsaneTricks.length)];
        const randomNumber2 = Math.floor(Math.random() * 3) + 1;
        const randomTrick2 =
          randomNumber2 === 1
            ? ExpertTricks[Math.floor(Math.random() * ExpertTricks.length)]
            : randomNumber2 === 2
            ? MasterTricks[Math.floor(Math.random() * MasterTricks.length)]
            : InsaneTricks[Math.floor(Math.random() * InsaneTricks.length)];
        setTrick(
          InsaneTricks[Math.floor(Math.random() * InsaneTricks.length)] +
            " x " +
            randomTrick +
            " x " +
            randomTrick2
        );
      }
    }
  }, [update, difficulty]);

  return (
    <div className="Box">
      <div className="titleBox">
        <div className="title">Game of Flip</div>
        <div className="titleMode">"{difficulty}"</div>
      </div>
      <div className="trickSet">
        <div
          className="reset"
          onClick={() => {
            setXs(0);
            setUpdate(update + 1);
          }}
        >
          reset
        </div>
        <div
          className={`combos ${combos && "bold"}`}
          onClick={() => {
            setUpdate(update + 1);
            setCombos(!combos);
          }}
        >
          combos
        </div>
        <div className="trick">{trick}</div>
      </div>
      <div className="isSuccess">
        <div
          className="Success"
          onClick={() => {
            setUpdate(update + 1);
          }}
        >
          Success
        </div>
        <div
          className="Fail"
          onClick={() => {
            setXs(xs + 1);
            setUpdate(update + 1);
          }}
        >
          Fail
        </div>
      </div>
      <div className="GameIndicator">
        <div className="flipCounter">{xs}x</div>
        <div className={`flip ${xs >= 1 && "red"}`}>F</div>
        <div className={`flip ${xs >= 2 && "red"}`}>L</div>
        <div className={`flip ${xs >= 3 && "red"}`}>I</div>
        <div className={`flip ${xs >= 4 && "red"}`}>P</div>
      </div>
      <div className="difficultyChoice">
        <div
          className={`difficulty ${difficulty === "Beginner" && "active"}`}
          onClick={() => setDifficulty("Beginner")}
        >
          Beginner
        </div>
        <div
          className={`difficulty ${difficulty === "Advanced" && "active"}`}
          onClick={() => setDifficulty("Advanced")}
        >
          Advanced
        </div>
        <div
          className={`difficulty ${difficulty === "Expert" && "active"}`}
          onClick={() => setDifficulty("Expert")}
        >
          Expert
        </div>
        <div
          className={`difficulty ${difficulty === "Master" && "active"}`}
          onClick={() => setDifficulty("Master")}
        >
          Master
        </div>
        <div
          className={`difficulty ${difficulty === "Insane" && "active"}`}
          onClick={() => setDifficulty("Insane")}
        >
          Insane
        </div>
      </div>
    </div>
  );
}

export default App;
