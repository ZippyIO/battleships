type GameStatus = 'setup' | 'active' | 'over';
type Props = {
    gameStatus: GameStatus;
    player: 'player1' | 'player2';
    setGameStage: (stage: GameStatus) => void;
};

const GameStats = ({ gameStatus, player, setGameStage }: Props) => (
    <div className="mt-2 flex flex-col items-center bg-dark-700 p-4">
        <p className="pb-4 text-2xl font-bold text-cyan-400">{gameStatus}</p>
        <div className="flex gap-1">
            <button
                onClick={() => setGameStage('setup')}
                type="button"
                className="rounded-md bg-blue-500 p-2 font-medium text-gray-200 hover:bg-blue-600 active:bg-blue-700"
            >
                Setup
            </button>
            <button
                onClick={() => setGameStage('active')}
                type="button"
                className="rounded-md bg-blue-500 p-2 font-medium text-gray-200 hover:bg-blue-600 active:bg-blue-700"
            >
                Active
            </button>
            <button
                onClick={() => setGameStage('over')}
                type="button"
                className="rounded-md bg-blue-500 p-2 font-medium text-gray-200 hover:bg-blue-600 active:bg-blue-700"
            >
                Over
            </button>
        </div>
        {player === 'player1' && <p>Player 1 turn</p>}
        {player === 'player2' && <p>Player 2 turn</p>}
    </div>
);

export default GameStats;
