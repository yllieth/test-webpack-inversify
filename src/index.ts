import 'reflect-metadata';
import { myContainer }  from "../inversify.config";
import { SpaceService } from "./services/space.service";

const spaceService = myContainer.get<SpaceService>(SpaceService);
document.body.innerHTML = JSON.stringify(spaceService.getSelectedSpace());
