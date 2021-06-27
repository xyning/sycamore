window.BENCHMARK_DATA = {
  "lastUpdate": 1624820677375,
  "repoUrl": "https://github.com/sycamore-rs/sycamore",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "11802a9a1d35c2573abdb79447e13b40ba27ff83",
          "message": "Setup continuous benchmark\n\nPush continuous benchmark results to gh_pages\n\nFix cargo bench command",
          "timestamp": "2021-03-17T19:49:56-07:00",
          "tree_id": "4f61562eff826f8fe365e54b622b63c998cd79b7",
          "url": "https://github.com/lukechu10/maple/commit/11802a9a1d35c2573abdb79447e13b40ba27ff83"
        },
        "date": 1616036009473,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49388,
            "range": "± 3692",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 408867,
            "range": "± 24368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "291bcccc9210fed8f7b9305c9e8370e4e1ff4c4c",
          "message": "Iteration (#49)\n\n* enable clone_on_ref_path\r\n\r\n* SignalVec\r\n\r\n* wip\r\n\r\n* Fix\r\n\r\n* wip\r\n\r\n* Add test for dropping owner inside create_root\r\n\r\n* cleanup\r\n\r\n* Simplify create_effect_initial\r\n\r\n* Cleanup\r\n\r\n* Add map_chain test\r\n\r\n* Todo demo\r\n\r\n* Fix insert\r\n\r\n* Fix compile error\r\n\r\n* Test map_chain_temporary\r\n\r\n* Update wasm-bindgen to 0.2.72\r\n\r\n* Fix netlify-build\r\n\r\n* Add to_vec",
          "timestamp": "2021-03-18T15:54:02-07:00",
          "tree_id": "2a0b53f131ed86eaeb2102c91f2feefafe40545b",
          "url": "https://github.com/lukechu10/maple/commit/291bcccc9210fed8f7b9305c9e8370e4e1ff4c4c"
        },
        "date": 1616108220084,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 54818,
            "range": "± 2432",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 358986,
            "range": "± 19175",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "128c3294392c6a456aeae131778d1f7f5c86cc1c",
          "message": "Iteration on `Signal<Vec>` and integration tests (#51)\n\n* wip\r\n\r\n* fix\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Add some integration tests\r\n\r\n* Fix test command in CI\r\n\r\n* Indexed\r\n\r\n* Remove excess nodes\r\n\r\n* Add some basic integration tests\r\n\r\n* Update changed nodes\r\n\r\n* Remove unused variabe\r\n\r\n* Keyed\r\n\r\n* Fix Keyed\r\n\r\n* Fix clippy\r\n\r\n* Add integration test for Indexed",
          "timestamp": "2021-03-23T20:52:06-07:00",
          "tree_id": "9b35766bebb5452f736475f18a5835deba37e853",
          "url": "https://github.com/lukechu10/maple/commit/128c3294392c6a456aeae131778d1f7f5c86cc1c"
        },
        "date": 1616558145110,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56522,
            "range": "± 2722",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 392673,
            "range": "± 15596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe32999412d1ef0d3932d78c0f7ba9019d06708a",
          "message": "Fix debug assertion (#53)",
          "timestamp": "2021-03-23T21:29:24-07:00",
          "tree_id": "79cb6c23a7b2b879e481eb4dbb45ae95b7dd14cf",
          "url": "https://github.com/lukechu10/maple/commit/fe32999412d1ef0d3932d78c0f7ba9019d06708a"
        },
        "date": 1616560359088,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52874,
            "range": "± 3282",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 378377,
            "range": "± 11683",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3314992d74d923ff7557608837cc4919a6d03273",
          "message": "Fix reactive bindings inside Indexed and Keyed children (#54)\n\n* Fix clippy\r\n\r\n* Remove Option<TemplateResult> in Indexed and Keyed\r\n\r\n* create_effect_initial call initial() in create_root\r\n\r\n* Call template function inside reactive root\r\n\r\n* Add docs for Keyed and Indexed\r\n\r\n* Add some more docs and doctests",
          "timestamp": "2021-03-24T12:55:33-07:00",
          "tree_id": "340227bbda14f65e7a25cc97ef51fd8a773f2d1b",
          "url": "https://github.com/lukechu10/maple/commit/3314992d74d923ff7557608837cc4919a6d03273"
        },
        "date": 1616615927340,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58505,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 374764,
            "range": "± 3930",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cb05bd80bf0baa5dc9db09c7015c3794562b733",
          "message": "Node refs (#57)\n\n* NodeRef\r\n\r\n* Set NodeRef with template! macro\r\n\r\n* Add NodeRef integration test",
          "timestamp": "2021-03-24T14:01:47-07:00",
          "tree_id": "63c3f7cdd5c3927b3eb222f797e2b67c978e7232",
          "url": "https://github.com/lukechu10/maple/commit/8cb05bd80bf0baa5dc9db09c7015c3794562b733"
        },
        "date": 1616619938774,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58393,
            "range": "± 2947",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 408288,
            "range": "± 20280",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8eda5aa825f3c6541aa280dbdb123bf08dd72f1c",
          "message": "Complete TodoMVC spec conforming implementation (#60)\n\n* Add fmt::Debug implementation to Signal and StateHandle\r\n\r\n* Create Header and Copyright components\r\n\r\n* Parse keywords in component path\r\n\r\n* Fix parsing with a Component followed by interpolated value\r\n\r\n* List and Item\r\n\r\n* Handle todo edit\r\n\r\n* Update trybuild tests\r\n\r\n* Toggle complete all\r\n\r\n* Add untrack utility\r\n\r\n* Fixes\r\n\r\n* Footer\r\n\r\n* Save todos to localStorage\r\n\r\n* Get Filter from Hash\r\n\r\n* Clear completed\r\n\r\n* Set value when entering editing mode",
          "timestamp": "2021-03-25T21:32:45-07:00",
          "tree_id": "c3fed21ccf6be373ddc701a96070e6ab6e15ed9d",
          "url": "https://github.com/lukechu10/maple/commit/8eda5aa825f3c6541aa280dbdb123bf08dd72f1c"
        },
        "date": 1616733355532,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49259,
            "range": "± 1286",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 349624,
            "range": "± 8185",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c18f28534bd36f67c2a884de4f21fe891f694041",
          "message": "Release 0.4.0 (#61)\n\n* Release 0.4.0\r\n\r\n* fixes",
          "timestamp": "2021-03-25T22:00:55-07:00",
          "tree_id": "edfbbd0b5f995c73d1950d7947cdc59a18c940e9",
          "url": "https://github.com/lukechu10/maple/commit/c18f28534bd36f67c2a884de4f21fe891f694041"
        },
        "date": 1616735046671,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47596,
            "range": "± 4069",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 347333,
            "range": "± 26747",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d36bbc71caec28255c15e108568b0b26f0ef7135",
          "message": "Minimize code size (#62)\n\n* Use dynamic dispatch for create_effect\r\n\r\n* Use dynamic dispatch for create_effect_initial\r\n\r\n* Use dyn Any for create_effect_initial ret and remove Clone bound\r\n\r\n* append_static_text\r\n\r\n* Make internal functions use trait objects\r\n\r\n* Make internal::attr() Box<dyn Fn() -> String>\r\n\r\n* Make create_root dynamic dispatch\r\n\r\n* Build examples with -o3 and LTO",
          "timestamp": "2021-03-26T11:05:36-07:00",
          "tree_id": "ebb99a34734427387daef63229afa9aea6c08e26",
          "url": "https://github.com/lukechu10/maple/commit/d36bbc71caec28255c15e108568b0b26f0ef7135"
        },
        "date": 1616782130774,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50552,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 534864,
            "range": "± 29791",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iwburns8@gmail.com",
            "name": "Ian Burns",
            "username": "iwburns"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25b9aa0938bcf152cf640bd7c880e15de1476113",
          "message": "fix typo in README.md (#64)",
          "timestamp": "2021-03-26T13:38:58-07:00",
          "tree_id": "d15a9e6e6ee111e20929439b84e844a2fc4072e3",
          "url": "https://github.com/lukechu10/maple/commit/25b9aa0938bcf152cf640bd7c880e15de1476113"
        },
        "date": 1616791314547,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58031,
            "range": "± 1102",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 581365,
            "range": "± 6168",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5ef27b0dcdba315c5e4a9cea27b99b30530ceb3",
          "message": "fix todomvc links (#65)",
          "timestamp": "2021-03-26T13:49:33-07:00",
          "tree_id": "24fdda96868cab414f685c99f57f31329b1b4ee6",
          "url": "https://github.com/lukechu10/maple/commit/e5ef27b0dcdba315c5e4a9cea27b99b30530ceb3"
        },
        "date": 1616791967728,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 59126,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 586231,
            "range": "± 2504",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90e6d46679a62d715f3502f3f64811482c94f02a",
          "message": "Add discord server link to issue template config (#68)",
          "timestamp": "2021-03-27T22:22:20-07:00",
          "tree_id": "676036cde031e6e6a8c799be4978273f7117335f",
          "url": "https://github.com/lukechu10/maple/commit/90e6d46679a62d715f3502f3f64811482c94f02a"
        },
        "date": 1616909116804,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52120,
            "range": "± 2415",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 539677,
            "range": "± 24640",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d96c5711d607248ab0bea1931b3239f9c7327222",
          "message": "Fix Keyed iteration (#73)\n\n* Add more integration tests\r\n\r\n* Move nodes instead of recreating nodes\r\n\r\n* Keyed do not always append new nodes to end",
          "timestamp": "2021-03-31T15:42:39-07:00",
          "tree_id": "16334ebfe9289fb571d76ec8574eb75d731a9c67",
          "url": "https://github.com/lukechu10/maple/commit/d96c5711d607248ab0bea1931b3239f9c7327222"
        },
        "date": 1617230745311,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51830,
            "range": "± 3240",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 508610,
            "range": "± 42425",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffab9c38f9f1f34abfb0d7754534db26e4dd534e",
          "message": "Release 0.4.1 (#74)",
          "timestamp": "2021-03-31T15:49:00-07:00",
          "tree_id": "96a15b04c09ea754ae953fefcac30d1e0c633a26",
          "url": "https://github.com/lukechu10/maple/commit/ffab9c38f9f1f34abfb0d7754534db26e4dd534e"
        },
        "date": 1617231124914,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58200,
            "range": "± 710",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 579314,
            "range": "± 9976",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b99fb54ff4e65dd321df662b8afcb54c1b0acf2",
          "message": "Fix Keyed iteration again (#75)\n\n* Fix\r\n\r\n* Remove fmt::Debug bound for debugging\r\n\r\n* Add nested reactivity test",
          "timestamp": "2021-03-31T18:51:03-07:00",
          "tree_id": "b7b2c379c5e91318194d3144c29f4a42a4092ae5",
          "url": "https://github.com/lukechu10/maple/commit/5b99fb54ff4e65dd321df662b8afcb54c1b0acf2"
        },
        "date": 1617242023071,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48532,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 485893,
            "range": "± 464",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f46cf591a1170e172477f065740289efd22756ec",
          "message": "Release 0.4.2 (#76)",
          "timestamp": "2021-03-31T18:56:22-07:00",
          "tree_id": "078b0c8e490fa5842d0d4386453ea478a1614826",
          "url": "https://github.com/lukechu10/maple/commit/f46cf591a1170e172477f065740289efd22756ec"
        },
        "date": 1617242382731,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56708,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 595712,
            "range": "± 22609",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a486c5bb4be20f1083d15d2a0374eda5fcaa1c46",
          "message": "Keyed reuse nodes (#77)\n\n* Add fast path for empty Vec in Keyed and Indexed\r\n\r\n* Remove old nodes not in iterable",
          "timestamp": "2021-03-31T23:07:41-07:00",
          "tree_id": "54f05dfa59667a923f463979b95fa382cf7f4dca",
          "url": "https://github.com/lukechu10/maple/commit/a486c5bb4be20f1083d15d2a0374eda5fcaa1c46"
        },
        "date": 1617257487040,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 62201,
            "range": "± 2512",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 623041,
            "range": "± 20245",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0cbf7661263f2ce555df93db355a21186e0f4829",
          "message": "Support attributes with '-' in name (#79)\n\n* Support attributes with '-' in name\r\n\r\n* Update README.md\r\n\r\n* Don't specify patch version in Cargo.toml",
          "timestamp": "2021-04-01T09:51:18-07:00",
          "tree_id": "e70e77f1da3e69c4503a9b54ab434ffe1bef144b",
          "url": "https://github.com/lukechu10/maple/commit/0cbf7661263f2ce555df93db355a21186e0f4829"
        },
        "date": 1617296081230,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55743,
            "range": "± 1477",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 572311,
            "range": "± 14196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a30b6074a763386a86c4020bb73b6ac48191cb15",
          "message": "Release 0.4.3 (#80)",
          "timestamp": "2021-04-01T09:57:30-07:00",
          "tree_id": "989059e650d97e968c5f5f36767e2ca33be87e54",
          "url": "https://github.com/lukechu10/maple/commit/a30b6074a763386a86c4020bb73b6ac48191cb15"
        },
        "date": 1617296433025,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57429,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 577837,
            "range": "± 6056",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "developer@lights0123.com",
            "name": "Ben Schattinger",
            "username": "lights0123"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22909d555a68339e3b096071f36c626c4497ab91",
          "message": "Backend Abstraction (#67)\n\n* Initial refactoring\r\n\r\n* Make it work\r\n\r\n* Fix counter\r\n\r\n* Fix components example\r\n\r\n* Fix docs\r\n\r\n* Start working on todomvc\r\n\r\n* Refactor out document function\r\n\r\n* Fix NodeRef\r\n\r\n* Fix tests\r\n\r\n* Start working on VDOM\r\n\r\nThis is not used for usual client-side operation: this is solely a replacement for the DOM when it's unavailable like on a server.\r\n\r\n* Undo debugging changes\r\n\r\n* Add SSR demo\r\n\r\n* Trigger test on PR\r\n\r\n* Always run test.yml steps regardless of previous\r\n\r\n* Make tests pass in CI\r\n\r\n* Squashed commit of the following:\r\n\r\ncommit 9e4aa92fdf5d748aa9581b86d6795aa8cfda0204\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 15:38:01 2021 -0700\r\n\r\n    Separate ssr and dom features\r\n\r\ncommit 898c27b7871e6766f802e172765aee53f181809e\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 10:24:29 2021 -0700\r\n\r\n    Fix intra doc links\r\n\r\ncommit 6417d75eb7c4956a4ea293d3a8a6a392e10f3907\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 09:56:35 2021 -0700\r\n\r\n    Move DomNode into submodule\r\n\r\ncommit 971c776ecf83af30c066c71ff562f3a522c21000\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 09:37:57 2021 -0700\r\n\r\n    Rename vdom::Node to ssr_node::SsrNode\r\n\r\ncommit 1f62d084c7e8fd546db529ab2e777ed40ef79d07\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Mon Mar 29 21:34:42 2021 -0700\r\n\r\n    Set default type for G depending  on feature\r\n\r\ncommit cf2b59307f6b765239e2453a25cc0ef66422190a\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Mon Mar 29 21:19:33 2021 -0700\r\n\r\n    Fix clippy issues\r\n\r\ncommit 74b397571cb9cee47155a9df8d2a1164273ca813\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Mon Mar 29 16:00:19 2021 -0700\r\n\r\n    Add dom and ssr features\r\n\r\n* Squashed commit of the following:\r\n\r\ncommit ace788ca0de1c208637d3c2a759df97bed7234d4\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 20:41:48 2021 -0700\r\n\r\n    Remove internal module\r\n\r\ncommit c454e85f5b724edc637e88a29e08d57a40752a0c\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 16:03:28 2021 -0700\r\n\r\n    Remove internal::attr\r\n\r\ncommit b0ddb88e8c3fc848254a81fc6c5c98fb67dd8b1b\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 15:50:08 2021 -0700\r\n\r\n    Remove internal::element\r\n\r\n* Fix text node codegen\r\n\r\n* Remove type param from NodeRef::get\r\n\r\n* Re-add type param to NodeRef::get\r\n\r\n* Update wasm-bindgen-cli to 0.2.73 in netlify-build\r\n\r\n* Make web-sys and wasm-bindgen optional\r\n\r\n* Fix compile errors\r\n\r\n* Update maple-core/src/flow.rs\r\n\r\nCo-authored-by: Ben Schattinger <developer@lights0123.com>\r\n\r\n* Make suggested changes\r\n\r\nCo-authored-by: Ben Schattinger <developer@lights0123.com>\r\n\r\n* Fix integration tests\r\n\r\n* Create root in render_to_string\r\n\r\n* Add some docs for GenericNode\r\n\r\n* Add some more docs\r\n\r\n* cargo fmt\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2021-04-01T20:39:11Z",
          "tree_id": "9ff4d04b7291f9baade23139bf565a2e6c2099ee",
          "url": "https://github.com/lukechu10/maple/commit/22909d555a68339e3b096071f36c626c4497ab91"
        },
        "date": 1617309753753,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58229,
            "range": "± 2610",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 578868,
            "range": "± 3537",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "274e0aedf06c9818fc98b30569d39d3fab4fe1d1",
          "message": "Implement missing operations on SsrNode (#82)\n\n* Add ssr benchmark\r\n\r\n* Update ssr_simple bench\r\n\r\n* Add wrapper around SsrNode\r\n\r\n* Implement insert_child_before\r\n\r\n* wip\r\n\r\n* Do not create nodes twice\r\n\r\n* SSR iteration\r\n\r\n* Add some integration tests for ssr\r\n\r\n* Add FIXME comment\r\n\r\n* Fix test features",
          "timestamp": "2021-04-04T19:39:15Z",
          "tree_id": "8f5035b25b2d797e73139509f06395c8e5254d47",
          "url": "https://github.com/lukechu10/maple/commit/274e0aedf06c9818fc98b30569d39d3fab4fe1d1"
        },
        "date": 1617565361981,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58116,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 579154,
            "range": "± 2493",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2308,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 111242,
            "range": "± 594",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a28ee7b14e3acc43b8b969e0b3e08d8c32d3fbb5",
          "message": "Documentation website (#83)\n\n* Add getting started page\r\n\r\n* Add installation guide\r\n\r\n* Hello, World!\r\n\r\n* Force install wasm-bindgen-cli\r\n\r\n* Add template! and reactivity docs\r\n\r\n* Add Netlify.toml\r\n\r\n* Fix config file name\r\n\r\n* Use rewrite instead of redirect\r\n\r\n* Add highlight.js\r\n\r\n* Add some styling\r\n\r\n* Add more docs",
          "timestamp": "2021-04-04T16:03:54-07:00",
          "tree_id": "fb5399bdc0884ba2e42ff616b06d1cd7f9958532",
          "url": "https://github.com/lukechu10/maple/commit/a28ee7b14e3acc43b8b969e0b3e08d8c32d3fbb5"
        },
        "date": 1617577646842,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52107,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 525124,
            "range": "± 21757",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2112,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 104058,
            "range": "± 3450",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "35810cece55a7ba254cde0480fe93f0bd3292bdb",
          "message": "Squashed commit of the following:\n\ncommit c849ec697d72ae534b279e4bc097329c76761f04\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\nDate:   Sun Apr 4 16:21:29 2021 -0700\n\n    fix",
          "timestamp": "2021-04-04T16:21:54-07:00",
          "tree_id": "5c6bf95f920e667329227e289b646be7c0d51cf7",
          "url": "https://github.com/lukechu10/maple/commit/35810cece55a7ba254cde0480fe93f0bd3292bdb"
        },
        "date": 1617578752290,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57418,
            "range": "± 2618",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 581685,
            "range": "± 24749",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2598,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 115014,
            "range": "± 8122",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe1d67fd4d99477dfc2a3e9fcbe80850a0215be1",
          "message": "Build website in Github Actions (#84)\n\n* Add build website action\r\n\r\n* Fix workflow\r\n\r\n* Add index.html to ssr example\r\n\r\n* Fix workflow\r\n\r\n* Add prod website build\r\n\r\n* Fix public-url prefix\r\n\r\n* Add cache to GitHub Action\r\n\r\n* Fix cache hash path\r\n\r\n* Add some docs\r\n\r\n* Split test and clippy into 2 jobs",
          "timestamp": "2021-04-05T04:30:38Z",
          "tree_id": "e791f896e681f42e27aa8b80820d3a9108db81c7",
          "url": "https://github.com/lukechu10/maple/commit/fe1d67fd4d99477dfc2a3e9fcbe80850a0215be1"
        },
        "date": 1617597225996,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 45820,
            "range": "± 3204",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 453568,
            "range": "± 30858",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1954,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 88714,
            "range": "± 7214",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "88851407ae8d2d49f5f88198023c1955856e6169",
          "message": "Fix prod website examples public url",
          "timestamp": "2021-04-04T21:41:59-07:00",
          "tree_id": "cbaae9db7a4c8a2e67cb9081cb98d5d352cb4dcb",
          "url": "https://github.com/lukechu10/maple/commit/88851407ae8d2d49f5f88198023c1955856e6169"
        },
        "date": 1617597938297,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49567,
            "range": "± 2032",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 513215,
            "range": "± 27344",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2266,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 99103,
            "range": "± 3555",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76e68d7fb750d01555c85169531409feea9c3280",
          "message": "Tweened Values (#86)\n\n* Add Tweened\r\n\r\n* Add some easing functions\r\n\r\n* Set final value to new_value to prevent rounding errors\r\n\r\n* Implement Lerp for more types\r\n\r\n* Add some more easing functions\r\n\r\n* Add missing button\r\n\r\n* Make run_tasks noop on non dom\r\n\r\n* Remove install wasm-pack for cargo clippy",
          "timestamp": "2021-04-05T15:14:20-07:00",
          "tree_id": "cab7c9c64344729fed51adaee3aa662ad6029095",
          "url": "https://github.com/lukechu10/maple/commit/76e68d7fb750d01555c85169531409feea9c3280"
        },
        "date": 1617661089875,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56133,
            "range": "± 4317",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 583705,
            "range": "± 31591",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2582,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 110877,
            "range": "± 8908",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5bfb75e80f43fe0279eac48a5a1b3b559a3a7c2",
          "message": "More docs (#87)\n\n* Rename Concepts to Basics\r\n\r\n* Add more pages\r\n\r\n* Add more doc placeholder pages\r\n\r\n* Add some API docs for Tweened\r\n\r\n* Keep TweenedInner in a Rc\r\n\r\n* Add some API docs",
          "timestamp": "2021-04-05T20:50:28-07:00",
          "tree_id": "2db013cb8a0a00d4b10cc27f69045917d4adf5ca",
          "url": "https://github.com/lukechu10/maple/commit/e5bfb75e80f43fe0279eac48a5a1b3b559a3a7c2"
        },
        "date": 1617681266705,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55953,
            "range": "± 3616",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 578213,
            "range": "± 49893",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2755,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 113244,
            "range": "± 7299",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51313597+tmpr@users.noreply.github.com",
            "name": "Alexander Temper",
            "username": "tmpr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7bf585cd739f8c4d2395439b4b4dfdfe7374628",
          "message": "Add specified easing functions specified in (#88) (#90)\n\n* Add Circular Easing (#88)\r\n\r\n* Add Exponential Easing (#88)\r\n\r\n* Add Sine Easing (#88)\r\n\r\n* Add Bounce Ease (#88)\r\n\r\n* Format Code\r\n\r\n* Apply suggestions from code review\r\n\r\nCommit suggested changes\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Switch Float Format (e.g. 1. -> 1.0)\r\n\r\n* Use std. Epsilon\r\n\r\n* Switch to associated functions\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2021-04-06T11:40:30-07:00",
          "tree_id": "5cc6e8f2fa4cafac9ad0569af43220fa46a1141a",
          "url": "https://github.com/lukechu10/maple/commit/c7bf585cd739f8c4d2395439b4b4dfdfe7374628"
        },
        "date": 1617734625597,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50037,
            "range": "± 2404",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 495042,
            "range": "± 24045",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1959,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 94189,
            "range": "± 5430",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1f2709eee8b9f0ad39285bf3982c78f43f06e09",
          "message": "Run unit tests in Miri (#91)\n\n* Run unit tests in Miri\r\n\r\n* Remove +nightly from cargo command\r\n\r\n* Update cargo cache name\r\n\r\n* Do not leak effects without an Owner\r\n\r\n* Untrack cleanup\r\n\r\n* Fix miri checks",
          "timestamp": "2021-04-06T20:59:36Z",
          "tree_id": "9c57e52d4c475b7a5ef2a6cec3d27f806aa82d44",
          "url": "https://github.com/lukechu10/maple/commit/e1f2709eee8b9f0ad39285bf3982c78f43f06e09"
        },
        "date": 1617743007261,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55620,
            "range": "± 6161",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 541045,
            "range": "± 25201",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2466,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 108882,
            "range": "± 5915",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "564449454aa86cebeb9381c2ccccc06b3fb3c49b",
          "message": "Document Fragments (#89)\n\n* Remove SignalVec\r\n\r\n* Move TemplateResult into sub-module\r\n\r\n* wrap comments at 100\r\n\r\n* Make TemplateResult able to hold a fragment\r\n\r\n* Iter and IntoIter for TemplateResult\r\n\r\n* Update flow.rs\r\n\r\n* Update render_* functions\r\n\r\n* Update Render trait\r\n\r\n* Make Render accept slice\r\n\r\n* Update template! macro\r\n\r\n* Fix template!\r\n\r\n* Allow multiple children at template! root\r\n\r\n* Add some integration tests\r\n\r\n* Add some more integration tests\r\n\r\n* Add more docs",
          "timestamp": "2021-04-06T23:23:57Z",
          "tree_id": "d4405eebf1a5a936e84b1dad7681b8fa71e89361",
          "url": "https://github.com/lukechu10/maple/commit/564449454aa86cebeb9381c2ccccc06b3fb3c49b"
        },
        "date": 1617751642709,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48582,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 479484,
            "range": "± 1837",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2389,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 103382,
            "range": "± 201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ef0a44ba8bf0e6f440dbd58bd8c306dd7e925bc",
          "message": "`#[component]` macro (#92)\n\n* Move template! into sub-module\r\n\r\n* Move ui tests into template/ folder\r\n\r\n* Add component macro\r\n\r\n* Fix intra-doc links\r\n\r\n* Add component! to prelude\r\n\r\n* Implement component macro\r\n\r\n* Use #[component] attribute macro\r\n\r\n* Fix ssr benchmarks\r\n\r\n* Fix tests\r\n\r\n* Update documentation",
          "timestamp": "2021-04-07T15:16:07-07:00",
          "tree_id": "12ada2cd82afc1e106ad2cf1c5a739d26aaebe03",
          "url": "https://github.com/lukechu10/maple/commit/2ef0a44ba8bf0e6f440dbd58bd8c306dd7e925bc"
        },
        "date": 1617833988992,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58159,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 574050,
            "range": "± 2936",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2463,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 114072,
            "range": "± 199",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d864c2de96d0d2ce7da77e9adba1db11a73b18b",
          "message": "2-way data binding (#93)\n\n* Parse bind:prop in template!\r\n\r\n* bind:value on input element\r\n\r\n* Do not assume presence of web_sys or wasm_bindgen\r\n\r\n* Bind to boolean properties\r\n\r\n* Remove checkbox from hello world example\r\n\r\n* return compile_error! instead of panic\r\n\r\n* Add integration test\r\n\r\n* Add data binding docs\r\n\r\n* Remove reqwest from docs\r\n\r\n* Update todomvc example",
          "timestamp": "2021-04-08T15:59:55Z",
          "tree_id": "54093c395ca60a202339062fec3bed8175bdfa5b",
          "url": "https://github.com/lukechu10/maple/commit/7d864c2de96d0d2ce7da77e9adba1db11a73b18b"
        },
        "date": 1617897825218,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57892,
            "range": "± 4626",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 572133,
            "range": "± 26142",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2445,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 114207,
            "range": "± 1621",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juanpatriciomarchetto@gmail.com",
            "name": "Juan Patricio Marchetto",
            "username": "JuanMarchetto"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e94012a634ba3abf9dd155befc34b6ffaa80aa86",
          "message": "address issue #71 (#95)",
          "timestamp": "2021-04-08T19:57:42-07:00",
          "tree_id": "89560c2af68d8cf7ada088657f6f9b81c374d26d",
          "url": "https://github.com/lukechu10/maple/commit/e94012a634ba3abf9dd155befc34b6ffaa80aa86"
        },
        "date": 1617937280345,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58201,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 571645,
            "range": "± 4573",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2442,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 113043,
            "range": "± 473",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "b1699edab563e462d05d411dcd6b271e74f459b1",
          "message": "Set cache-control for netlify",
          "timestamp": "2021-04-14T00:05:40-07:00",
          "tree_id": "d75b0400dbb1ba61a726d3043dda17afddb98035",
          "url": "https://github.com/lukechu10/maple/commit/b1699edab563e462d05d411dcd6b271e74f459b1"
        },
        "date": 1618384157001,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47252,
            "range": "± 3309",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 491446,
            "range": "± 46115",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2270,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 99553,
            "range": "± 10643",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "98253def6991ba6f7784bb47c7579c9006aa1c3b",
          "message": "Cache css",
          "timestamp": "2021-04-14T00:06:31-07:00",
          "tree_id": "470069136f258ee8a929e428ddd01542f42b9310",
          "url": "https://github.com/lukechu10/maple/commit/98253def6991ba6f7784bb47c7579c9006aa1c3b"
        },
        "date": 1618384233710,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56327,
            "range": "± 2747",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 552087,
            "range": "± 19744",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2645,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 116178,
            "range": "± 7430",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juanpatriciomarchetto@gmail.com",
            "name": "Juan Patricio Marchetto",
            "username": "JuanMarchetto"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e94012a634ba3abf9dd155befc34b6ffaa80aa86",
          "message": "address issue #71 (#95)",
          "timestamp": "2021-04-08T19:57:42-07:00",
          "tree_id": "89560c2af68d8cf7ada088657f6f9b81c374d26d",
          "url": "https://github.com/lukechu10/maple/commit/e94012a634ba3abf9dd155befc34b6ffaa80aa86"
        },
        "date": 1618384360429,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51198,
            "range": "± 3049",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 522541,
            "range": "± 25627",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2460,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 106591,
            "range": "± 7653",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "351ef653ac8e0ac8cf45eb58bbf5b9e7c99a0fde",
          "message": "Update Trunk to 0.11.0 (#96)\n\n* Set cache-control for netlify\r\n\r\n* Cache css\r\n\r\n* Update Trunk to 0.11.0\r\n\r\n* Fix cache-control\r\n\r\n* Fix pattern",
          "timestamp": "2021-04-14T00:30:50-07:00",
          "tree_id": "043a5605acf8bf0840524e85e80d4e5fc80be9e3",
          "url": "https://github.com/lukechu10/maple/commit/351ef653ac8e0ac8cf45eb58bbf5b9e7c99a0fde"
        },
        "date": 1618385656956,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52871,
            "range": "± 2106",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 515468,
            "range": "± 20229",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2255,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 107329,
            "range": "± 3146",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edadefa658276903157d6cbf8b08ec4c3cac1fff",
          "message": "Website Lighthouse Improvements (#97)\n\n* improvements\r\n\r\n* Add robots.txt",
          "timestamp": "2021-04-14T18:11:27Z",
          "tree_id": "07e53467a140aff007fb01a244932d53ffdb00bf",
          "url": "https://github.com/lukechu10/maple/commit/edadefa658276903157d6cbf8b08ec4c3cac1fff"
        },
        "date": 1618424170171,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58604,
            "range": "± 4027",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 558856,
            "range": "± 24953",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2630,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 119656,
            "range": "± 5549",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00fa09d526b452045b7d9b52834b434779bef810",
          "message": "Setup gitpod.io configuration (#98)\n\n* Setup gitpod configuration\r\n\r\n* Fix prebuild command\r\n\r\n* Install wasm-bindgen-test-runner\r\n\r\n* Fix development.md\r\n\r\n* Fix Dockerfile",
          "timestamp": "2021-04-15T17:17:53-07:00",
          "tree_id": "7cd219b594212cacd50fd3505738135a9d848ee0",
          "url": "https://github.com/lukechu10/maple/commit/00fa09d526b452045b7d9b52834b434779bef810"
        },
        "date": 1618532546773,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 62321,
            "range": "± 4655",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 618909,
            "range": "± 33449",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 3058,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 132125,
            "range": "± 10734",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30116eb20412371a9b54bd3fe6a309035b963d59",
          "message": "Rename `Owner` to `ReactiveScope` (#99)\n\n* Fix code style in easing.rs\r\n\r\n* Rename Owner to ReactiveScope\r\n\r\n* Remove bumpalo",
          "timestamp": "2021-04-15T17:54:53-07:00",
          "tree_id": "b50a258ec6b18691edd804293c2a74c2c3965996",
          "url": "https://github.com/lukechu10/maple/commit/30116eb20412371a9b54bd3fe6a309035b963d59"
        },
        "date": 1618534713122,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58039,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 571281,
            "range": "± 7349",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2473,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 114365,
            "range": "± 1063",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68db603627a26a2f47b3381ebcd2d2fb78a4baf4",
          "message": "Better components (#100)\n\n* Make component generic over create function\r\n\r\n* Add component name in debug mode\r\n\r\n* Forward generics on component to function",
          "timestamp": "2021-04-16T01:38:27Z",
          "tree_id": "eabc5bd3cfdf7a73aee3d363fcf617e5c0fa4cc0",
          "url": "https://github.com/lukechu10/maple/commit/68db603627a26a2f47b3381ebcd2d2fb78a4baf4"
        },
        "date": 1618537337264,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56804,
            "range": "± 1311",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 574165,
            "range": "± 10210",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2760,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 118667,
            "range": "± 2598",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "creeper844@gmail.com",
            "name": "Riey",
            "username": "Riey"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94db20a78aac56e60c3e5220ccfeb5b6f3f07b49",
          "message": "Fix CHANGELOG typo (#102)",
          "timestamp": "2021-04-22T09:57:13-07:00",
          "tree_id": "242d907acd915ad0b9514adc70c7ab43bbd2d2c8",
          "url": "https://github.com/lukechu10/maple/commit/94db20a78aac56e60c3e5220ccfeb5b6f3f07b49"
        },
        "date": 1619110880399,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58467,
            "range": "± 3496",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 587579,
            "range": "± 33750",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2752,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 119606,
            "range": "± 5113",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b27cafc2a74778fd891d6a5b30813325f651fb43",
          "message": "Add contributors image to README.md",
          "timestamp": "2021-04-22T10:05:38-07:00",
          "tree_id": "1efa76d1a9b6b068267b1ee31be43fee5f2e6855",
          "url": "https://github.com/lukechu10/maple/commit/b27cafc2a74778fd891d6a5b30813325f651fb43"
        },
        "date": 1619111399774,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57707,
            "range": "± 2685",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 586053,
            "range": "± 18606",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2734,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 118217,
            "range": "± 2575",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94ad7d3ad20f619f4e24f09557e1542ea85c6c13",
          "message": "Update wasm-bindgen to v0.2.74 in .gitpod.Dockerfile (#108)",
          "timestamp": "2021-06-01T20:47:39Z",
          "tree_id": "55d4adc9bfffe876b4e5da93ab41c43d8f34cded",
          "url": "https://github.com/lukechu10/maple/commit/94ad7d3ad20f619f4e24f09557e1542ea85c6c13"
        },
        "date": 1622580676905,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55952,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 576552,
            "range": "± 11406",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2717,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 117778,
            "range": "± 2855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80371dcbfbd1bdaa166ed52c1ba113b4589a1595",
          "message": "Text in `TemplateResult` (#104)\n\n* rust_2018_idioms\r\n\r\n* Ccorrectly stringify self-closing tags in SSR\r\n\r\n* Rename render to create\r\n\r\n* Move render_* functions into sub-modules\r\n\r\n* Naive hydration\r\n\r\n* get_children utility\r\n\r\n* Add mapped and indexed placeholder\r\n\r\n* Allow effects to be FnMut (#103)\r\n\r\n* Allow effects to be FnMut\r\n\r\n* Only add -Dwarnings for clippy\r\n\r\n* Set CARGO_TERM_COLOR to always\r\n\r\n* map_indexed\r\n\r\n* Implement map_keyed\r\n\r\n* Add fast paths for map_keyed\r\n\r\n* Make TemplateResult recursive\r\n\r\n* Make map_* return closures\r\n\r\n* Refactor TemplateResult\r\n\r\n* Add a Lazy TemplateResult\r\n\r\n* Allow create_memo and create_selector to take FnMut\r\n\r\n* Fix unit tests\r\n\r\n* Change TemplateResultInner::Lazy to be FnMut\r\n\r\n* insert_expression node and lazy\r\n\r\n* Make most of the tests pass\r\n\r\n* Remove append_render\r\n\r\n* Make Lazy work\r\n\r\n* Fix reactivity\r\n\r\n* Make fragment template work\r\n\r\n* renconcile_fragments\r\n\r\n* Support TemplateResult in interpolation syntax\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Push lazy TemplateResult to normalized\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* NodeId\r\n\r\n* Add renconcile tests\r\n\r\n* Add reconcile do not clone node test\r\n\r\n* Update wasm-bindgen to 0.2.74 in CI\r\n\r\n* Interpolation nested reactivity test\r\n\r\n* Remove Option from TemplateResultInner::Lazy type\r\n\r\n* cargo clippy\r\n\r\n* Append fragment nodes at the right location\r\n\r\n* wip\r\n\r\n* refactor\r\n\r\n* refactor\r\n\r\n* Fix map_keyed\r\n\r\n* Fix clippy\r\n\r\n* Remove unused NodeRef in TodoMVC example\r\n\r\n* Remove fragment from GenericNode\r\n\r\n* Remove Fragment from SsrNode\r\n\r\n* Refactor SsrNode::try_remove_child\r\n\r\n* Deprecate TemplateResult::flatten\r\n\r\n* Change Render to IntoTemplate\r\n\r\n* Refactor rendering of template fragments\r\n\r\n* Rewrite impl ToTokens for Element\r\n\r\n* Split up ToTokens in element.rs\r\n\r\n* Visitor pattern for Html nodes\r\n\r\n* TemplateVisitor\r\n\r\n* Insert components and interpolated values before a marker\r\n\r\n* Fix nested fragments\r\n\r\n* Lazy in fragment test\r\n\r\n* Fix DomNode::replace_child\r\n\r\n* Fix Indexed and Keyed\r\n\r\n* Fix iteration example\r\n\r\n* Fix reconcile\r\n\r\n* Pass the wasm test suite!!!\r\n\r\n* Fix the ssr test",
          "timestamp": "2021-06-07T23:07:08Z",
          "tree_id": "f7ad5c5bb61bee82f978ded2e119929ea946b85f",
          "url": "https://github.com/lukechu10/maple/commit/80371dcbfbd1bdaa166ed52c1ba113b4589a1595"
        },
        "date": 1623107431508,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57416,
            "range": "± 785",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 583933,
            "range": "± 13993",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2338,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 118442,
            "range": "± 2121",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2b7f7ffaf1284f3e01e37f01d72c81edc054825",
          "message": "Rename to sycamore (#109)",
          "timestamp": "2021-06-07T16:22:47-07:00",
          "tree_id": "507a10838f6fe1f1c3b7faf908a05302513182cb",
          "url": "https://github.com/lukechu10/sycamore/commit/f2b7f7ffaf1284f3e01e37f01d72c81edc054825"
        },
        "date": 1623108509272,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 62322,
            "range": "± 1876",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 640765,
            "range": "± 27397",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2751,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 131512,
            "range": "± 5243",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99d7380638cd2a17eb53765bb3b12cde94ceb05e",
          "message": "Update git repository url to sycamore-rs/sycamore (#110)",
          "timestamp": "2021-06-07T16:27:10-07:00",
          "tree_id": "dc66018d71e1292639124a71c51f4e80bba6e305",
          "url": "https://github.com/sycamore-rs/sycamore/commit/99d7380638cd2a17eb53765bb3b12cde94ceb05e"
        },
        "date": 1623108676488,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57186,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 607738,
            "range": "± 2521",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2449,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 122434,
            "range": "± 153",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "d25464dc3194f8b505129c6a9756a30b5ef9dab8",
          "message": "v0.5.0-beta.0",
          "timestamp": "2021-06-07T17:33:34-07:00",
          "tree_id": "afe938f2f661fd0a5c344f9620ed1bd2e55df80c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d25464dc3194f8b505129c6a9756a30b5ef9dab8"
        },
        "date": 1623112640473,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55645,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 589689,
            "range": "± 7265",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2409,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 120070,
            "range": "± 1389",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "ef40b4561e217688fb3fd3a51a05dc1654b5162d",
          "message": "Fix README.md path",
          "timestamp": "2021-06-07T17:35:01-07:00",
          "tree_id": "fd7fbee97327f0eecffc247d7d2062639bfe1bc3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ef40b4561e217688fb3fd3a51a05dc1654b5162d"
        },
        "date": 1623112733768,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58282,
            "range": "± 3184",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 621002,
            "range": "± 57010",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2403,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 119837,
            "range": "± 1877",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4147d2dd9f7cd9c91b4ce584dcdefcef1452c8aa",
          "message": "Update docs (#111)",
          "timestamp": "2021-06-08T08:36:02-07:00",
          "tree_id": "c8e95196cf0882e9e04781008b3d9c51f40e42c1",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4147d2dd9f7cd9c91b4ce584dcdefcef1452c8aa"
        },
        "date": 1623166789550,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55930,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 594170,
            "range": "± 16866",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2527,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 112392,
            "range": "± 5202",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7bd98327a450dde8c2629f8673550cdef89e2dd",
          "message": "Rename TemplateResult to Template (#112)",
          "timestamp": "2021-06-08T21:52:04Z",
          "tree_id": "230e242a61417d415169e4ab2792e94a9fd3d45e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e7bd98327a450dde8c2629f8673550cdef89e2dd"
        },
        "date": 1623189335909,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55048,
            "range": "± 2350",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 560212,
            "range": "± 22987",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2498,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 117333,
            "range": "± 4012",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c9b1f35f7fc5c6a82f0916f1926dae8af0c2698",
          "message": "Rename reactive to rx (#113)",
          "timestamp": "2021-06-08T22:00:24Z",
          "tree_id": "660cf67251b041d15204193bef84aa68411fd6bc",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8c9b1f35f7fc5c6a82f0916f1926dae8af0c2698"
        },
        "date": 1623189827992,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56565,
            "range": "± 2981",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 610785,
            "range": "± 5817",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2438,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 121793,
            "range": "± 1057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c1f19282375da9c44a6771b2a472109f533a98b",
          "message": "Add micro-benchmarks for `map_indexed` and `map_keyed` (#115)\n\n* Add micro-benchmarks for map_keyed and map_indexed\r\n\r\n* Add some optimizations",
          "timestamp": "2021-06-09T16:00:25-07:00",
          "tree_id": "eb9ff290eab209d4e4dca7bc60c1608ea98590f1",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6c1f19282375da9c44a6771b2a472109f533a98b"
        },
        "date": 1623279831940,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46956,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 504468,
            "range": "± 2995",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2294,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 105758,
            "range": "± 2446",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68abeb0a36355c06714a0ac3584921071b3d3fe4",
          "message": "Run js-framework-benchmark in CI (#114)\n\n* Add js-framework-benchmark example\r\n\r\n* Use references more often in generic_node::render\r\n\r\n* Add js framework benchmark workflow\r\n\r\n* Fix search Cargo.toml\r\n\r\n* Do not use http crate to start server\r\n\r\n* Add if always() to steps\r\n\r\n* Update workflows\r\n\r\n* Remove set-env\r\n\r\n* Fix env variable\r\n\r\n* Update workflow\r\n\r\n* Remove js-framework-benchmark example\r\n\r\n* Fix workflow\r\n\r\n* Update js_framework_bench.yml",
          "timestamp": "2021-06-09T18:15:08-07:00",
          "tree_id": "20e8e2d0d4ae0a8c840edc4b02ebf75dc695c3be",
          "url": "https://github.com/sycamore-rs/sycamore/commit/68abeb0a36355c06714a0ac3584921071b3d3fe4"
        },
        "date": 1623287931328,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42887,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 450231,
            "range": "± 14564",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2018,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 94498,
            "range": "± 2331",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fe17c311645e666f60c82da1d0c5c4516c57619",
          "message": "Fix naming of benches to work with continuous benchmark (#116)",
          "timestamp": "2021-06-10T01:20:56Z",
          "tree_id": "407327eee5a8dceb7dbc7a07a9a83342df90b6c4",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5fe17c311645e666f60c82da1d0c5c4516c57619"
        },
        "date": 1623288297181,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57563,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 591322,
            "range": "± 13046",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16177,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38318,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2341,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 118583,
            "range": "± 2344",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ff2e7625b2f09243acce7121f6153150613131c",
          "message": "TailwindCSS for docs website (#117)\n\n* New tailwindcss navbar\r\n\r\n* Index page\r\n\r\n* Content page",
          "timestamp": "2021-06-10T11:36:54-07:00",
          "tree_id": "aa07216d3b97410d207dbf419c052ace9bbb1fab",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4ff2e7625b2f09243acce7121f6153150613131c"
        },
        "date": 1623350469123,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53438,
            "range": "± 3157",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 590406,
            "range": "± 29049",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 15877,
            "range": "± 1051",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33932,
            "range": "± 2763",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2536,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 118013,
            "range": "± 8914",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "56610b6288f8b465b7acba4a8d1105bfe876ffb6",
          "message": "Fix docs styling and missing links in sidebar",
          "timestamp": "2021-06-10T12:18:09-07:00",
          "tree_id": "9e3839940004b757fe2ffb423fb0cb5b0f96006d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/56610b6288f8b465b7acba4a8d1105bfe876ffb6"
        },
        "date": 1623352907487,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40925,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 447081,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12237,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 27193,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2239,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 105199,
            "range": "± 95",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db69e72f96e352e31fed7da4ce091262914f33a1",
          "message": "Sycamore Router (#118)\n\n* Create sycamore-router and  sycamore-router-macro crates\r\n\r\n* Route matching implementation\r\n\r\n* Route parser\r\n\r\n* Fields::Unnamed\r\n\r\n* Router codegen\r\n\r\n* Add more trybuild tests\r\n\r\n* Add integration tests\r\n\r\n* Rename proc-macro Router to Route\r\n\r\n* Rename trait Router to Route\r\n\r\n* wip\r\n\r\n* StaticRouter, Link and BrowserRouter\r\n\r\n* history.pushState\r\n\r\n* Use sycamore_router for docs\r\n\r\n* Listen to onpopstate",
          "timestamp": "2021-06-23T18:46:11Z",
          "tree_id": "cfba0d9d3d695107a2df788307450ae5076f957b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/db69e72f96e352e31fed7da4ce091262914f33a1"
        },
        "date": 1624474217529,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55261,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 597196,
            "range": "± 7925",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16787,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35404,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2406,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 121203,
            "range": "± 458",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffc1f4561d3c0e20e1a0a9b655d26f47f5aef4bf",
          "message": "Temporary \"fake\" hydration (#101)\n\n* Fix docs for SsrNode\r\n\r\n* Add comments about hydrate",
          "timestamp": "2021-06-25T17:41:01Z",
          "tree_id": "0547f799a1a7bc73ec2027ad6591a0fbde658588",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ffc1f4561d3c0e20e1a0a9b655d26f47f5aef4bf"
        },
        "date": 1624643147862,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56304,
            "range": "± 3893",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 612027,
            "range": "± 23706",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16732,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35138,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2466,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 121381,
            "range": "± 1373",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf985c0b8593dcadf968da4bbe6cb6350a126c6d",
          "message": "Various performance improvements (#126)\n\n* Intern tag string for DomNode::element\r\n\r\n* Update js_framework_bench.yml\r\n\r\n* Fix read file contents path in workflow\r\n\r\n* Use a key function in map_keyed\r\n\r\n* Intern string literals in sycamore-macro\r\n\r\n* Intern attribute name\r\n\r\n* Drop event handler on_cleanup\r\n\r\n* Fix test",
          "timestamp": "2021-06-26T16:15:06-07:00",
          "tree_id": "6c131adc4211891b7f86a94c94560e60ce540c19",
          "url": "https://github.com/sycamore-rs/sycamore/commit/bf985c0b8593dcadf968da4bbe6cb6350a126c6d"
        },
        "date": 1624749549740,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 54955,
            "range": "± 3812",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 645519,
            "range": "± 11797",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18398,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 37652,
            "range": "± 823",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2577,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 124537,
            "range": "± 1947",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5923d321568e4984c663c17284ad1e07427d889c",
          "message": "Router use anchor tags (#128)\n\n* Use anchor tags\r\n\r\n* Do not refresh if link to same page",
          "timestamp": "2021-06-27T18:02:06Z",
          "tree_id": "013e3bb5159299ed89de17284206cd97480401b8",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5923d321568e4984c663c17284ad1e07427d889c"
        },
        "date": 1624817184460,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53179,
            "range": "± 4137",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 600466,
            "range": "± 28831",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17149,
            "range": "± 1358",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33650,
            "range": "± 2884",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2714,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 123214,
            "range": "± 9384",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "6d5c6d6a488bcaca0cfda6c92ab0d1758c049cd4",
          "message": "v0.5.0-beta.1",
          "timestamp": "2021-06-27T18:56:37Z",
          "tree_id": "43911e167e373d314892b2443c54ef3de4d1963c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6d5c6d6a488bcaca0cfda6c92ab0d1758c049cd4"
        },
        "date": 1624820504873,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56766,
            "range": "± 3641",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 669142,
            "range": "± 21232",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17502,
            "range": "± 740",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 36904,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2848,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 131506,
            "range": "± 5552",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "934e38a01ba0c690753bb9de95ad586b8bfa111c",
          "message": "Update Cargo.toml with missing fields",
          "timestamp": "2021-06-27T19:00:22Z",
          "tree_id": "737af4faacec2a9d5d6d36cfd590bf5187d324c9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/934e38a01ba0c690753bb9de95ad586b8bfa111c"
        },
        "date": 1624820676315,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50037,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 581140,
            "range": "± 23904",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 15289,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 32042,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2504,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 115291,
            "range": "± 3145",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}