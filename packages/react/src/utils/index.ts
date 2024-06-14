import { UnknownObject } from "@mylinkpi/widget-core";
import { Draft } from "immer";

export type Updater<T extends UnknownObject> = (draft: Draft<T>) => void;
