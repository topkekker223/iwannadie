// Copyright 2011 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

suite('ParseTreeValidator.js', function() {

  var ParseTreeValidator =
      System.get('traceur@0.0.Y/src/syntax/ParseTreeValidator').ParseTreeValidator;

  test('Validate null', function() {
    ParseTreeValidator.validate(null);
  });

});