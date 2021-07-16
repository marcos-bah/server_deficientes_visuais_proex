import 'package:shelf/shelf_io.dart' as shelf_io;
import 'dart:io' show Platform;
import 'package:shelf_router/shelf_router.dart';
import 'package:shelf/shelf.dart';

class Home {
  Function handle() {
    final router = Router();

    router.get('/', (Request request) {
      return Response.ok('Hello World');
    });

    router.all('/<ignored|.*>', (Request request) {
      return Response.notFound('Page not found');
    });

    return router;
  }

  void initServer() async {
    var envVars = Platform.environment;

    var portEnv = envVars['PORT'];
    var PORT = portEnv == null ? 8080 : int.parse(portEnv);

    // Create server
    final server = await shelf_io.serve(handle(), '0.0.0.0', PORT);
    // Server on message
    print('☀️ Server running on localhost:${server.port} ☀️');
  }
}
