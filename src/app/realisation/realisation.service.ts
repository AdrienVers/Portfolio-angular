import { Injectable } from "@angular/core";
import { REALISATION } from "./mock-realisation-list";
import { Realisation } from "./realisation";

@Injectable()
export class RealisationService {
	getRealisationList(): Realisation[] {
		return REALISATION;
	}
}
