export interface OddsProbability {
    UpProb: number;
    Prob: number;
    LoProb: number;
}

export enum Odds {
    Impossible,
    NoWay,
    VeryUnlikely,
    Unlikely,
    FiftyFifty,
    SomewhatLikely,
    Likely,
    VeryLikely,
    NearSureThing,
    ASureThing,
    HasToBe,
}

const FateOdds = new Map<string, OddsProbability>();

FateOdds.set(`${Odds.HasToBe}-1`, { UpProb: 16, Prob: 80, LoProb: 97 });
FateOdds.set(`${Odds.HasToBe}-2`, { UpProb: 16, Prob: 85, LoProb: 97 });
FateOdds.set(`${Odds.HasToBe}-3`, { UpProb: 18, Prob: 90, LoProb: 99 });
FateOdds.set(`${Odds.HasToBe}-4`, { UpProb: 19, Prob: 95, LoProb: 100 });
FateOdds.set(`${Odds.HasToBe}-5`, { UpProb: 19, Prob: 95, LoProb: 100 });
FateOdds.set(`${Odds.HasToBe}-6`, { UpProb: 20, Prob: 100, LoProb: 0 });
FateOdds.set(`${Odds.HasToBe}-7`, { UpProb: 20, Prob: 100, LoProb: 0 });
FateOdds.set(`${Odds.HasToBe}-8`, { UpProb: 26, Prob: 130, LoProb: 0 });
FateOdds.set(`${Odds.HasToBe}-9`, { UpProb: 26, Prob: 145, LoProb: 0 });

FateOdds.set(`${Odds.ASureThing}-1`, { UpProb: 11, Prob: 55, LoProb: 92 });
FateOdds.set(`${Odds.ASureThing}-2`, { UpProb: 13, Prob: 65, LoProb: 94 });
FateOdds.set(`${Odds.ASureThing}-3`, { UpProb: 16, Prob: 80, LoProb: 97 });
FateOdds.set(`${Odds.ASureThing}-4`, { UpProb: 16, Prob: 85, LoProb: 97 });
FateOdds.set(`${Odds.ASureThing}-5`, { UpProb: 18, Prob: 90, LoProb: 99 });
FateOdds.set(`${Odds.ASureThing}-6`, { UpProb: 19, Prob: 95, LoProb: 100 });
FateOdds.set(`${Odds.ASureThing}-7`, { UpProb: 19, Prob: 95, LoProb: 100 });
FateOdds.set(`${Odds.ASureThing}-8`, { UpProb: 22, Prob: 110, LoProb: 0 });
FateOdds.set(`${Odds.ASureThing}-9`, { UpProb: 25, Prob: 125, LoProb: 0 });

FateOdds.set(`${Odds.NearSureThing}-1`, { UpProb: 10, Prob: 50, LoProb: 91 });
FateOdds.set(`${Odds.NearSureThing}-2`, { UpProb: 11, Prob: 55, LoProb: 92 });
FateOdds.set(`${Odds.NearSureThing}-3`, { UpProb: 15, Prob: 75, LoProb: 96 });
FateOdds.set(`${Odds.NearSureThing}-4`, { UpProb: 16, Prob: 80, LoProb: 97 });
FateOdds.set(`${Odds.NearSureThing}-5`, { UpProb: 18, Prob: 90, LoProb: 99 });
FateOdds.set(`${Odds.NearSureThing}-6`, { UpProb: 19, Prob: 95, LoProb: 100 });
FateOdds.set(`${Odds.NearSureThing}-7`, { UpProb: 19, Prob: 95, LoProb: 100 });
FateOdds.set(`${Odds.NearSureThing}-8`, { UpProb: 20, Prob: 100, LoProb: 0 });
FateOdds.set(`${Odds.NearSureThing}-9`, { UpProb: 23, Prob: 115, LoProb: 0 });

FateOdds.set(`${Odds.VeryLikely}-1`, { UpProb: 9, Prob: 45, LoProb: 90 });
FateOdds.set(`${Odds.VeryLikely}-2`, { UpProb: 10, Prob: 50, LoProb: 91 });
FateOdds.set(`${Odds.VeryLikely}-3`, { UpProb: 13, Prob: 65, LoProb: 94 });
FateOdds.set(`${Odds.VeryLikely}-4`, { UpProb: 15, Prob: 75, LoProb: 96 });
FateOdds.set(`${Odds.VeryLikely}-5`, { UpProb: 16, Prob: 85, LoProb: 97 });
FateOdds.set(`${Odds.VeryLikely}-6`, { UpProb: 18, Prob: 90, LoProb: 99 });
FateOdds.set(`${Odds.VeryLikely}-7`, { UpProb: 19, Prob: 95, LoProb: 100 });
FateOdds.set(`${Odds.VeryLikely}-8`, { UpProb: 19, Prob: 95, LoProb: 100 });
FateOdds.set(`${Odds.VeryLikely}-9`, { UpProb: 21, Prob: 105, LoProb: 0 });

FateOdds.set(`${Odds.Likely}-1`, { UpProb: 5, Prob: 25, LoProb: 86 });
FateOdds.set(`${Odds.Likely}-2`, { UpProb: 7, Prob: 35, LoProb: 88 });
FateOdds.set(`${Odds.Likely}-3`, { UpProb: 10, Prob: 50, LoProb: 91 });
FateOdds.set(`${Odds.Likely}-4`, { UpProb: 11, Prob: 55, LoProb: 92 });
FateOdds.set(`${Odds.Likely}-5`, { UpProb: 15, Prob: 75, LoProb: 96 });
FateOdds.set(`${Odds.Likely}-6`, { UpProb: 16, Prob: 85, LoProb: 97 });
FateOdds.set(`${Odds.Likely}-7`, { UpProb: 18, Prob: 90, LoProb: 99 });
FateOdds.set(`${Odds.Likely}-8`, { UpProb: 19, Prob: 95, LoProb: 100 });
FateOdds.set(`${Odds.Likely}-9`, { UpProb: 200, Prob: 100, LoProb: 0 });

FateOdds.set(`${Odds.SomewhatLikely}-1`, { UpProb: 4, Prob: 20, LoProb: 85 });
FateOdds.set(`${Odds.SomewhatLikely}-2`, { UpProb: 5, Prob: 25, LoProb: 86 });
FateOdds.set(`${Odds.SomewhatLikely}-3`, { UpProb: 9, Prob: 45, LoProb: 90 });
FateOdds.set(`${Odds.SomewhatLikely}-4`, { UpProb: 10, Prob: 50, LoProb: 91 });
FateOdds.set(`${Odds.SomewhatLikely}-5`, { UpProb: 13, Prob: 65, LoProb: 94 });
FateOdds.set(`${Odds.SomewhatLikely}-6`, { UpProb: 16, Prob: 80, LoProb: 97 });
FateOdds.set(`${Odds.SomewhatLikely}-7`, { UpProb: 16, Prob: 85, LoProb: 97 });
FateOdds.set(`${Odds.SomewhatLikely}-8`, { UpProb: 18, Prob: 90, LoProb: 99 });
FateOdds.set(`${Odds.SomewhatLikely}-9`, { UpProb: 19, Prob: 95, LoProb: 100 });

FateOdds.set(`${Odds.FiftyFifty}-1`, { UpProb: 2, Prob: 10, LoProb: 83 });
FateOdds.set(`${Odds.FiftyFifty}-2`, { UpProb: 3, Prob: 15, LoProb: 84 });
FateOdds.set(`${Odds.FiftyFifty}-3`, { UpProb: 5, Prob: 25, LoProb: 86 });
FateOdds.set(`${Odds.FiftyFifty}-4`, { UpProb: 7, Prob: 35, LoProb: 88 });
FateOdds.set(`${Odds.FiftyFifty}-5`, { UpProb: 10, Prob: 50, LoProb: 91 });
FateOdds.set(`${Odds.FiftyFifty}-6`, { UpProb: 13, Prob: 65, LoProb: 94 });
FateOdds.set(`${Odds.FiftyFifty}-7`, { UpProb: 15, Prob: 75, LoProb: 96 });
FateOdds.set(`${Odds.FiftyFifty}-8`, { UpProb: 16, Prob: 85, LoProb: 97 });
FateOdds.set(`${Odds.FiftyFifty}-9`, { UpProb: 19, Prob: 95, LoProb: 100 });

FateOdds.set(`${Odds.Unlikely}-1`, { UpProb: 1, Prob: 5, LoProb: 82 });
FateOdds.set(`${Odds.Unlikely}-2`, { UpProb: 2, Prob: 10, LoProb: 83 });
FateOdds.set(`${Odds.Unlikely}-3`, { UpProb: 3, Prob: 15, LoProb: 84 });
FateOdds.set(`${Odds.Unlikely}-4`, { UpProb: 4, Prob: 20, LoProb: 85 });
FateOdds.set(`${Odds.Unlikely}-5`, { UpProb: 7, Prob: 35, LoProb: 88 });
FateOdds.set(`${Odds.Unlikely}-6`, { UpProb: 10, Prob: 50, LoProb: 91 });
FateOdds.set(`${Odds.Unlikely}-7`, { UpProb: 11, Prob: 55, LoProb: 92 });
FateOdds.set(`${Odds.Unlikely}-8`, { UpProb: 15, Prob: 75, LoProb: 96 });
FateOdds.set(`${Odds.Unlikely}-9`, { UpProb: 18, Prob: 90, LoProb: 99 });

FateOdds.set(`${Odds.VeryUnlikely}-1`, { UpProb: 1, Prob: 5, LoProb: 82 });
FateOdds.set(`${Odds.VeryUnlikely}-2`, { UpProb: 1, Prob: 5, LoProb: 82 });
FateOdds.set(`${Odds.VeryUnlikely}-3`, { UpProb: 2, Prob: 10, LoProb: 83 });
FateOdds.set(`${Odds.VeryUnlikely}-4`, { UpProb: 3, Prob: 15, LoProb: 84 });
FateOdds.set(`${Odds.VeryUnlikely}-5`, { UpProb: 5, Prob: 25, LoProb: 86 });
FateOdds.set(`${Odds.VeryUnlikely}-6`, { UpProb: 9, Prob: 45, LoProb: 90 });
FateOdds.set(`${Odds.VeryUnlikely}-7`, { UpProb: 10, Prob: 50, LoProb: 91 });
FateOdds.set(`${Odds.VeryUnlikely}-8`, { UpProb: 13, Prob: 65, LoProb: 94 });
FateOdds.set(`${Odds.VeryUnlikely}-9`, { UpProb: 16, Prob: 85, LoProb: 97 });

FateOdds.set(`${Odds.NoWay}-1`, { UpProb: 0, Prob: 0, LoProb: 83 });
FateOdds.set(`${Odds.NoWay}-2`, { UpProb: 1, Prob: 5, LoProb: 82 });
FateOdds.set(`${Odds.NoWay}-3`, { UpProb: 1, Prob: 5, LoProb: 82 });
FateOdds.set(`${Odds.NoWay}-4`, { UpProb: 2, Prob: 10, LoProb: 83 });
FateOdds.set(`${Odds.NoWay}-5`, { UpProb: 3, Prob: 15, LoProb: 84 });
FateOdds.set(`${Odds.NoWay}-6`, { UpProb: 5, Prob: 25, LoProb: 86 });
FateOdds.set(`${Odds.NoWay}-7`, { UpProb: 7, Prob: 35, LoProb: 88 });
FateOdds.set(`${Odds.NoWay}-8`, { UpProb: 10, Prob: 50, LoProb: 91 });
FateOdds.set(`${Odds.NoWay}-9`, { UpProb: 15, Prob: 75, LoProb: 96 });

FateOdds.set(`${Odds.Impossible}-1`, { UpProb: 0, Prob: -20, LoProb: 77 });
FateOdds.set(`${Odds.Impossible}-2`, { UpProb: 0, Prob: 0, LoProb: 81 });
FateOdds.set(`${Odds.Impossible}-3`, { UpProb: 0, Prob: 0, LoProb: 81 });
FateOdds.set(`${Odds.Impossible}-4`, { UpProb: 1, Prob: 5, LoProb: 82 });
FateOdds.set(`${Odds.Impossible}-5`, { UpProb: 1, Prob: 5, LoProb: 82 });
FateOdds.set(`${Odds.Impossible}-6`, { UpProb: 2, Prob: 10, LoProb: 83 });
FateOdds.set(`${Odds.Impossible}-7`, { UpProb: 3, Prob: 15, LoProb: 84 });
FateOdds.set(`${Odds.Impossible}-8`, { UpProb: 5, Prob: 25, LoProb: 86 });
FateOdds.set(`${Odds.Impossible}-9`, { UpProb: 10, Prob: 50, LoProb: 91 });

export { FateOdds };
