import { injectable } from "inversify";
import { Environment } from "../models/environment";

@injectable()
export class SelectionService {
  getSelectedEnvironment() : Environment {
    return "UAT";
  }
}