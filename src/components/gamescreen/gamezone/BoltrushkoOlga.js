function BoltrushkoOlga() {
    return (
        <div className="gamezone" id="currentPlayer">
                <div className="cell"></div>
                <div className="cell">A</div>
                <div className="cell">B</div>
                <div className="cell">C</div>
                <div className="cell">D</div>
                <div className="cell">E</div>
                <div className="cell">F</div>
                <div className="cell">G</div>
                <div className="cell">H</div>
                <div className="cell">I</div>
                <div className="cell">J</div>
                <?php for ($i = 1; $i <= 10; $i++) { ?>
                <div className="cell"><?php echo $i; ?></div>
                <?php for ($j = 1; $j <= 10; $j++) { ?>
                <div className="cell" id="<?php echo $i . $j; ?>"></div>
                <?php } ?>
                <?php } ?>
        </div>
    )
}

// .game-board {
//         display: grid;
//         grid-template-columns: repeat(11, 40px);
//         grid-template-rows: repeat(11, 40px);
//         gap: 1px;
//         border: 1px solid #000;
//     }
//     .cell {
//         width: 40px;
//         height: 40px;
//         border: 1px solid #000;
//         box-sizing: border-box;
//         text-align: center;
//         line-height: 40px;
//     }

export default BoltrushkoOlga