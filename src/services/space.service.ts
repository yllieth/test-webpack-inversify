import { inject, injectable } from "inversify";
import { SelectionService } from "./selection.service";

@injectable()
export class SpaceService {
  @inject(SelectionService) private selectionService: SelectionService;

  getSelectedSpace() : any {
    return {
      environment: this.selectionService.getSelectedEnvironment(),
      spaceName: 'Ubiservices Portal Test PC'
    };
  }
}