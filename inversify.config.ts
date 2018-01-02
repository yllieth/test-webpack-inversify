import { Container } from "inversify";
import { SelectionService } from "./src/services/selection.service";
import { SpaceService } from "./src/services/space.service";

const myContainer = new Container();
myContainer.bind<SelectionService>(SelectionService).to(SelectionService);
myContainer.bind<SpaceService>(SpaceService).to(SpaceService);

export { myContainer };