
import * as application from "tns-core-modules/application";

import * as trace from 'tns-core-modules/trace';

trace.addCategories(trace.categories.All);

trace.enable();


application.run({ moduleName: "app-root" });

