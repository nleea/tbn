import { Iuser } from "./models";
export declare const createUser: (body: Iuser) => Promise<{
    message: string;
    status: number;
}>;
export declare const listUser: () => Promise<{
    message: string;
    data: import("mongodb").WithId<Iuser>[];
    status: number;
} | {
    message: string;
    status: number;
    data?: undefined;
}>;
//# sourceMappingURL=repository.d.ts.map