// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
// 
// note: hotswap and reverse can be used simultaneously

module.exports = {
  nets: {
    from: undefined,
    to: undefined
  },
  params: {
    class: 'S',
    hotswap: false,
    reverse: false,
    keycaps: false,
    diode: false
  },
  body: p => {
    const standard = `
      (module PG1350 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))      
      
      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))
        
      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))

      
      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `

    const diode = `
        
        ${''/* diode symbols */}
        (fp_line (start 8 2.25) (end 8 2.75) (layer F.SilkS) (width 0.1))
        (fp_line (start 8.4 2.25) (end 8 1.65) (layer F.SilkS) (width 0.1))
        (fp_line (start 7.6 2.25) (end 8.4 2.25) (layer F.SilkS) (width 0.1))
        (fp_line (start 8 1.65) (end 7.6 2.25) (layer F.SilkS) (width 0.1))
        (fp_line (start 8 1.65) (end 8.55 1.65) (layer F.SilkS) (width 0.1))
        (fp_line (start 8 1.65) (end 7.45 1.65) (layer F.SilkS) (width 0.1))
        (fp_line (start 8 1.25) (end 8 1.65) (layer F.SilkS) (width 0.1))
        (fp_line (start 8 2.25) (end 8 2.75) (layer B.SilkS) (width 0.1))
        (fp_line (start 8.4 2.25) (end 8 1.65) (layer B.SilkS) (width 0.1))
        (fp_line (start 7.6 2.25) (end 8.4 2.25) (layer B.SilkS) (width 0.1))
        (fp_line (start 8 1.65) (end 7.6 2.25) (layer B.SilkS) (width 0.1))
        (fp_line (start 8 1.65) (end 8.55 1.65) (layer B.SilkS) (width 0.1))
        (fp_line (start 8 1.65) (end 7.45 1.65) (layer B.SilkS) (width 0.1))
        (fp_line (start 8 1.25) (end 8 1.65) (layer B.SilkS) (width 0.1))
       
        ${''/* SMD pads on both sides */}
        (pad 3 smd rect (at 8 0.35 ${p.rot-90}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.net.to.str})
        (pad 2 smd rect (at 8 3.65 ${p.rot-90}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.local_net('Diode').str})
        (pad 3 smd rect (at 8 0.35 ${p.rot-90}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.net.to.str})
        (pad 2 smd rect (at 8 3.65 ${p.rot-90}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.local_net('Diode').str})

        (pad 3 thru_hole circle (at 8 1.5) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.to.str})
        ${''/*(fp_line (start 8 1.5) (end 8 0.35) (width 0.25) (layer "F.Cu"))
        (fp_line (start 8 1.5) (end 8 0.35) (width 0.25) (layer "B.Cu"))*/}
        (pad 2 thru_hole circle (at 8 2.5) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.local_net('Diode').str})
        ${''/*(fp_line (start 8 2.5) (end 8 3.65) (width 0.25) (layer "F.Cu"))
        (fp_line (start 8 2.5) (end 8 3.65) (width 0.25) (layer "B.Cu"))
        (pad 3 smd custom (at 8 0.75 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
        (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives
        ))*/}
        
        ${''/* Diode SMD Traces */}
        (pad 2 smd custom (at 8 2.5 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.local_net('Diode').str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0 1.15) (width 0.25))
          )
        )
        (pad 2 smd custom (at 8 2.5 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.local_net('Diode').str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0 1.15) (width 0.25))
          )
        )

        (pad 3 smd custom (at 8 1.5 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.to.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0 -1.15) (width 0.25))
          )
        )
        (pad 3 smd custom (at 8 1.5 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.to.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0 -1.15) (width 0.25))
          )
        )

        
        ${''/* Column SMD Traces */}
        (pad 1 smd custom (at 3.275 -5.95 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.from.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -0.5 0.5) (width 0.25))
            (gr_line (start -0.5 0.5) (end -0.5 7.525) (width 0.25))
            (gr_line (start -0.5 7.525) (end 1.725 9.75) (width 0.25))
          )
        )
        (pad 1 smd custom (at -3.275 -5.95 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.from.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0.5 0.5) (width 0.25))
            (gr_line (start 0.5 0.5) (end 0.5 7.525) (width 0.25))
            (gr_line (start 0.5 7.525) (end -1.725 9.75) (width 0.25))
          )
        )
        (pad 1 smd custom (at -5 3.8 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.from.str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 10 0) (width 0.25))
          )
        )

        ${''/* "Inner" SMD Traces */}
        (pad 2 smd custom (at -8.275 -3.75 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.local_net('Diode').str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 0 6.4) (width 0.25))
            (gr_line (start 0 6.4) (end 3.25 9.65) (width 0.25))
            (gr_line (start 3.25 9.65) (end 8.275 9.65) (width 0.25))
          )
        )
        (pad 2 smd custom (at 0 5.9 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.local_net('Diode').str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 5.75 0) (width 0.25))
            (gr_line (start 5.75 0) (end 8 -2.25) (width 0.25))
          )
        )
        (pad 2 smd custom (at 8.275 -3.75 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.local_net('Diode').str}
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.5 1.5) (width 0.25))
            (gr_line (start -1.5 1.5) (end -1.5 5.025) (width 0.25))
            (gr_line (start -1.5 5.025) (end -0.275 6.25) (width 0.25))
          )
        )

        ${''/* Key coord silks */}
        (fp_text user "(R${p.net.to.name.substring(3)}, C${p.net.from.name.substring(3)})" (at 0 2.54 ${p.rot} unlocked) (layer "F.SilkS")
          (effects (font (size 0.75 0.75) (thickness 0.15)))
        )
        (fp_text user "(R${p.net.to.name.substring(3)}, C${p.net.from.name.substring(3)})" (at 0 2.54 ${p.rot} unlocked) (layer "B.SilkS")
          (effects 
            (font (size 0.75 0.75) (thickness 0.15))
            (justify mirror)
          )
        )
        `

    function pins(def_neg, def_pos, def_side) {
      return `
        ${'' /* holes */}
        (pad "" np_thru_hole circle (at ${def_pos}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
    
        ${'' /* net pads */}
        (pad 1 smd rect (at ${def_neg}3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.net.from.str})
        (pad 2 smd rect (at ${def_pos}8.275 -3.75 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.local_net('Diode').str})

          ${''/* pins */}
          (pad 1 thru_hole circle (at ${def_pos}5 3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.net.from.str})
          (pad 2 thru_hole circle (at ${def_pos}0 5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.local_net('Diode').str})
        `
    }
    if(p.param.reverse) {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${p.param.diode ? diode : ''}
        ${pins('-', '', 'B')}
        ${pins('', '-', 'F')})
        `
    } else {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${p.param.diode ? diode : ''}
        ${pins('-', '', 'B')})
        `
    }
  }
}
