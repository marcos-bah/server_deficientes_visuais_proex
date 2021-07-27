import 'dart:io';

import 'package:shelf_router/shelf_router.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart' as io;

class Server {
  void listen() async {
    var envVars = Platform.environment;

    var portEnv = envVars['PORT'];
    var PORT = portEnv == null ? 8080 : int.parse(portEnv);

    // Create server
    var app = Router();

    app.get('/hello', (Request request) {
      return Response.ok('hello-world');
    });

    app.get('/user/<user>', (Request request, String user) {
      return Response.ok('hello $user');
    });

    var server = await io.serve(app, 'localhost', PORT);

    // Server on message
    print(' ☀️ Server running on localhost:${server.port} ☀️ ');
  }
}
